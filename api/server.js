"use strict"

// Requires
const express = require("express")
const axios = require("axios")
const bodyParser = require("body-parser")
const path = require("path")
const pokemon = require("pokemontcgsdk")
const { jsPDF } = require("jspdf")

// App Setup
const app = express()
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "../undeck/build")))

// API Key Setup
const KEY = process.env.POKEMON_API_KEY
pokemon.configure({ apiKey: KEY })

// =========
// Endpoints
// =========

// get a given number of random cards given a query
app.get("/api/random", async (req, res) => {
  try {
    const { q, pageSize = 1 } = req.query
    if (q !== undefined) {
      const dummy = await pokemon.card.where({ q, pageSize: 1 })
      const page = Math.floor(Math.random() * dummy.totalCount / pageSize) || 1
      const cards = await pokemon.card.where({ q, pageSize, page })
      res.json(cards)
    } else {
      res.status(400).type("text").send("Missing required query parameter: q")
    }
  } catch (err) {
    res.status(500).type("text").send("Oh no! Team Rocket stole all of our cards!")
  }
})

// get all cards that match a given query
app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q
    if (q !== undefined) {
      const cards = await pokemon.card.where({ q })
      res.json(cards)
    } else {
      res.status(400).type("text").send("Missing required query parameter: q")
    }
  } catch (err) {
    res.status(500).type("text").send("We can't find your cards! Looks like Team Rocket is up to no good.")
  }
})

// get the json data for a given deck string
app.get("/api/deck/:deckString", async (req, res) => {
  try {
    const deck = await getDeckCards(req.params.deckString)
    res.json(deck)
  } catch (err) {
    res.status(500).type("text").send("We can't find your deck, have you tried unsleeving it and resleeving it again?")
  }
})

// make a pdf for a given deck string
app.get("/api/pdf/:deckString", async (req, res) => {
  try {
    const deck = await getDeckCards(req.params.deckString)
    const images = deck.map(card => card.images.large)
    const pdf = await makePDF(images)
    const buffer = Buffer.from(pdf)
    res.type("pdf").send(buffer)
  } catch (err) {
    res.status(500).send("We can't build your deck, have you tried unsleeving it and resleeving it again?")
  }
})

// get all the rarities
app.get("/api/rarities", async (req, res) => {
  try {
    res.json(await pokemon.rarity.all())
  } catch (err) {
    res.status(500).type("text").send("Due to a series of mishaps, all cards have arbitrarily made Ultra-Super-Omega Rare.")
  }
})

// send file backup endpoint
app.get("*", (req, res) => {
  res.type("html").sendFile(path.join(__dirname, "../undeck/build/index.html"))
})

// ================
// Helper Functions
// ================

/**
 * Gets all the card objects from a given deck string and returns them in an array
 * @param {String} deckString - deck string with | delimiter
 * @returns {Promise<Array<Object>>} - promise that resolves to an array of card objects
 */
async function getDeckCards(deckString) {
  return Promise.all(deckString.split("|").map(id => pokemon.card.find(id)))
}

/**
 * Constructs a pdf given an array of card image urls.
 * @param {Array<String>} deck - array of card image urls
 * @returns {Promise<ArrayBuffer>} - array buffer for the deck pdf
 */
async function makePDF(deck) {
  const doc = new jsPDF({ format: "letter", unit: "in" })
  for (let i = 0; i < deck.length; i++) {
    if (i > 8 && i % 9 === 0) doc.addPage("letter")
    const x = 0.53 + 2.49 * (i % 3)
    const y = 0.3 + 3.47 * Math.floor((i % 9) / 3)
    const buffer = await axios.get(deck[i], {
      headers: { "X-API-KEY": KEY },
      responseType: "arraybuffer"
    }).then(statusCheck)
    const img = Buffer.from(buffer.data, "binary").toString("base64")
    const data = "data:image/png;base64," + img
    doc.addImage(data, "png", x, y, 2.48, 3.46)
  }
  return doc.output("arraybuffer")
}

/**
 * Validates the status of the response.
 * @param {Response} res - any response to be checked
 * @returns {Promise} - returns the passed response as a promise
 */
 async function statusCheck(res) {
  if (res.statusText !== "OK") throw new Error("an error occurred, try again later")
  return res
}

const PORT = process.env.PORT || 3080
app.listen(PORT)