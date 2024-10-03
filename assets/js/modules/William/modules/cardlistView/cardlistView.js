import { section } from "../../William.js";
import getSingleCard from "../singleCard/singleCard.js";
export default function displayCardList(data) {
  let container = document.createElement("section");
  container.classList.add("displayCardList");
  container.innerHTML = "";

  let gengarContainer = document.createElement("section");
  gengarContainer.classList.add("gengarHolder");

  let header = document.createElement("header");
  header.innerHTML = `<h1>Gengar Pokédex</h1>`;
  header.classList.add("gengar");

  data.forEach((gengar) => {
    let gengarCard = document.createElement("div");
    gengarCard.classList.add("gengarCard");
    gengarCard.innerHTML = `
          <img src="${gengar.images.small}" class="gengarClick" id="${gengar.id}" alt="${gengar.name}">
      `;
    gengarContainer.appendChild(gengarCard);

    gengarCard.addEventListener("click", () => {
      //   console.log(gengar.id);
      getSingleCard(gengar.id);
    });
  });

  container.appendChild(header);
  container.appendChild(gengarContainer);

  section.appendChild(container);
}
