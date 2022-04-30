export function openDeckPDF(deckString) {
  fetch("/api/pdf/" + deckString)
    .then(statusCheck)
    .then(res => res.blob())
    .then(res => {
      window.open(
        window.URL.createObjectURL(res, {type: "application/pdf"}),
        "_blank",
        "noreferrer"
      );
    });
}

export function getCards() {
  return fetch(`/api/random?pageSize=` + 50)
    .then(statusCheck)
    .then(res => res.json())
    .then(res => res.data)
    .catch(handleError);
}

export function getDeck() {
  return fetch("api/random?pageSize=" + 10)
    .then(statusCheck)
    .then(res => res.json())
    .then(res => res.data)
    .catch(handleError);
}

async function statusCheck(res) {
  if (!res.ok) throw new Error(await res.text());
  return res;
}

function handleError(err) {
  console.error(err);
}