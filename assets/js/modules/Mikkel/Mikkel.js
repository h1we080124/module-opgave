export default async function setupMikkel() {
  return fetch("https://excuser-three.vercel.app/v1/excuse/college")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Mikkel's network response was not ok");
      }
      return response.json();
    })

    .then((data) => {
      handleJokes(data);
      return data;
    })

    .catch((error) => {
      console.log(error);
      return error;
    });
}

function handleJokes() {
  const jokeDisplay = document.getElementById("Mikkel-p");
  const jokeButton = document.getElementById("Mikkel-button");

  jokeButton.addEventListener("click", () => {
    fetch("https://excuser-three.vercel.app/v1/excuse/college") // replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].excuse);
        jokeDisplay.innerHTML = `<p>${data[0].excuse}</p>`; // assuming the joke is in the "joke" property
      });
  });
}
