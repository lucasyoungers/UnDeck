export function openDeckPDF(deckString) {
  fetch("/api/pdf/" + deckString)
    .then(statusCheck)
    .then(res => res.blob())
    .then(res => {
      window.open(
        window.URL.createObjectURL(res, { type: "application/pdf" }),
        "_blank",
        "noreferrer"
      );
    });
}

export async function getCards(pageSize = 50) {
  try {
    const rarities = await (await fetch("/api/rarities")).json()
    const lowRarities = ["Common", "Uncommon", "Rare", "Rare Holo", "Promo"]
    const highRarities = rarities.filter(rarity => !lowRarities.includes(rarity))
    const randomURL = `/api/random?pageSize=${pageSize}&q=!rarity:"${highRarities.join("|")}"`
    return fetch(randomURL)
      .then(statusCheck)
      .then(res => res.json())
      .then(res => res.data)
      .then(res => res.sort(() => Math.random() - 0.5))
      .catch(handleError)
  } catch(err) {
    handleError(err)
  }
}

export function getDeck() {
  return fetch("api/deck/" + window.localStorage.deck)
    .then(statusCheck)
    .then(res => res.json())
    .catch(handleError);
}

export function getSearch(query) {
  return fetch("api/cards/" + query)
    .then(statusCheck)
    .then(res => res.json())
    .then(res => res.data)
    .catch(handleError)
}

export function addToLocalDeck(id) {
  const deckString = window.localStorage.deck
  let deck = deckString ? deckString.split("|") : []
  deck.push(id)
  window.localStorage.deck = deck.join("|")
}

export function removeFromLocalDeck(id) {
  const deckString = window.localStorage.deck
  let deck = deckString ? deckString.split("|") : []
  deck.splice(deck.indexOf(id), 1)
  window.localStorage.deck = deck.join("|")
}

export function deleteLocalDeck() {
  window.localStorage.deck = ""
}

async function statusCheck(res) {
  if (!res.ok) throw new Error(await res.text());
  return res;
}

function handleError(err) {
  console.error(err);
}