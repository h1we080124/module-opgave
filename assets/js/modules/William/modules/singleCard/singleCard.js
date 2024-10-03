import singleCardView from "../singleCardView/singleCardView.js";
export default async function getSingleCard(id) {
  return fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      singleCardView(data);
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}
