export default async function getData() {
  return fetch(
    "https://api.pokemontcg.io/v2/cards?q=name:gengar&pageSize=9&orderBy=-set.releaseDate"
  )
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}
