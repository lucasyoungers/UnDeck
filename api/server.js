"use strict";

// Requires
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const path = require("path");
const pokemon = require("pokemontcgsdk");
const { jsPDF } = require("jspdf");

// App Setup
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../undeck/build")));

// API Key Setup
const KEY = process.env.POKEMON_API_KEY;
pokemon.configure({ apiKey: KEY });

// =========
// Endpoints
// =========

app.get("/api/deck/:deckString", async (req, res) => {
  try {
    const deckString = req.params.deckString
    const ids =  deckString.split("|")
    const deck = await Promise.all(ids.map(id => pokemon.card.find(id)))
    res.json(deck)
  } catch (err) {
    console.error(err)
    res.status(500).send("on no! our code! it's broken!")
  }
})

app.get("/api/pdf/:deckString", async (req, res) => {
  try {
    const ids = req.params.deckString.split("|");
    const deck = await Promise.all(ids.map(id => pokemon.card.find(id)));
    const images = deck.map(card => card.images.large);
    const buffer = Buffer.from(await makePDF(images));
    res.type("pdf").send(buffer);
  } catch (err) {
    console.error(err)
    res.status(500).send("oh no! our code! it's broken!");
  }
});

app.get("/api/random", async (req, res) => {
  try {
    const q = req.query.q || "";
    const pageSize = req.query.pageSize || 1;
    const page = Math.floor(Math.random() * (await pokemon.card.where({ q, pageSize: 1 })).totalCount / pageSize) || 1;
    const cards = await pokemon.card.where({ q, pageSize, page });
    res.json(cards);
  } catch (err) {
    res.status(500).type("text").send("something went wrong on the server");
  }
});

app.get("/api/rarities", async (req, res) => {
  try {
    res.json(await pokemon.rarity.all())
  } catch (err) {
    res.status(500).type("text").send("something went wrong on the server")
  }
})

app.get("/api/*", async (req, res) => {
  let path = req.params[0];
  let query = "";
  let queryKeys = Object.keys(req.query);
  queryKeys.forEach(key => {
    query += "&" + key + "=" + req.query[key];
  });
  if (query) {
    query = "?" + query.slice(1);
  }
  let full = URL + "/" + path + query;
  try {
    let result = await axios.get(full, { headers: HEADERS });
    statusCheck(result);
    res.json(result.data);
  } catch (err) {
    res.status(400).type("text").send("bad request");
  }
});

app.get("*", (req, res) => {
  res.type("html").sendFile(path.join(__dirname, "../undeck/build/index.html"));
});

// ================
// Helper Functions
// ================

async function makePDF(deck) {
  const doc = new jsPDF({ format: "letter", unit: "in" });
  for (let i = 0; i < deck.length; i++) {
    if (i > 8 && i % 9 === 0) {
      doc.addPage("letter");
    }
    let x = 0.53 + 2.49 * (i % 3);
    let y = 0.3 + 3.47 * Math.floor((i % 9) / 3);
    let res = await axios.get(deck[i], {
      headers: { "X-API-KEY": KEY },
      responseType: "arraybuffer"
    });
    statusCheck(res);
    let img = Buffer.from(res.data, "binary").toString("base64");
    let data = "data:image/png;base64," + img;
    doc.addImage(data, "png", x, y, 2.48, 3.46);
  }
  return doc.output("arraybuffer");
}

/**
 * Validates the status of the response.
 * @param {Response} res - any response to be checked
 * @returns {Promise} - returns the passed response as a promise
 */
 async function statusCheck(res) {
  if (res.statusText !== "OK") {
    throw new Error("an error occurred, try again later");
  }
  return res;
}

const PORT = process.env.PORT || 3080;
app.listen(PORT);