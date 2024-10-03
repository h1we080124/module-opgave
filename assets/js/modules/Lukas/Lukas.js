export default function setupLukas() {
  const section = document.createElement("section");
  section.id = "lukas";
  section.style.backgroundColor = "#909090";
  document.body.appendChild(section);

  fetchData();
  fetchFact();
  buttonFunction();
}

function fetchData() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((data) => {
      if (data.url.endsWith(".mp4")) {
        console.log("Skipped .mp4 file:", data.url);
        fetchData();
      }
      console.log(data);
      displayDogImage(data);
    })
    .catch((error) => {
      console.error("Error fetching the dog image:", error);
    });
}

function fetchFact() {
  fetch("https://dogapi.dog/api/v2/facts")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayFact(data);
    })
    .catch((error) => {
      console.error("Error fetching the dog fact:", error);
    });
}

function displayDogImage(data) {
  const dogImage = document.createElement("img");
  dogImage.src = data.url;
  dogImage.style.maxWidth = "250px";
  document.getElementById("lukas").appendChild(dogImage);
}

function displayFact(data) {
  const dogFact = document.createElement("p");
  dogFact.innerHTML = data.data[0].attributes.body;
  document.getElementById("lukas").appendChild(dogFact);
}

function buttonFunction() {
  const button = document.createElement("button");
  button.innerHTML = "Sød Kat";
  button.addEventListener("click", () => {
    // Remove old image and fact
    const section = document.getElementById("lukas");
    const oldImage = section.querySelector("img");
    const oldFact = section.querySelector("p");
    if (oldImage) {
      oldImage.remove();
    }
    if (oldFact) {
      oldFact.remove();
    }

    // Fetch new data
    fetchData();
    fetchFact();
  });
  document.getElementById("lukas").appendChild(button);
}
