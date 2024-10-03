import { section } from "../../William.js";
import setupWilliam from "../../William.js";
export default function singleCardView(info) {
  console.log(info.data);
  let myCard = info.data;
  section.innerHTML = "";

  let myHtml = `
<figure class="myCard">
    <img id="imageHover" src="${myCard.images.small}" alt="${myCard.name}" class="pokemon-image">
    <figcaption>
        <div class="logo">
            <img src="${myCard.set.images.logo}" alt="${myCard.set.name} logo">
        </div>
        <header>
            <h2>${myCard.name}</h2>
        </header>
        <article>
            <p class="pokedex-number">Pokedex Number: ${myCard.nationalPokedexNumbers[0]}</p>
            <p class="type">Type: ${myCard.types[0]}</p>
            <p class="evolves-from">Evolves From: ${myCard.evolvesFrom}</p>
            <p class="rarity">Rarity: ${myCard.rarity}</p>
            <p class="hp">HP: ${myCard.hp}</p>
            <p class="damage">Damage: ${myCard.attacks[0].damage}</p>
            <p class="supertype">supertype: ${myCard.supertype}</p>
            <p class="weaknesses">weaknesses: ${myCard.weaknesses[0].type} ${myCard.weaknesses[0].value}</p>

        </article>
        <footer>
            <button class="goBackBtn" id="goBack">Back</button>
        </footer>
    </figcaption>
</figure>
`;

  section.innerHTML = myHtml;

  let backBtn = document.getElementById("goBack");
  backBtn.addEventListener("click", (e) => {
    setupWilliam();
  });

  let imageHover = document.getElementById("imageHover");
  imageHover.addEventListener("mousemove", (e) => {
    rotateElement(e, imageHover);
  });
  imageHover.addEventListener("mouseleave", () => {
    imageHover.style.transform = "";
    imageHover.style.transition = "transform 0.3s";
  });
}

function rotateElement(e, cardElement) {
  const rect = cardElement.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const middleX = rect.width / 2;
  const middleY = rect.height / 2;
  const offsetX = ((x - middleX) / middleX) * 15;
  const offsetY = ((y - middleY) / middleY) * 15;
  cardElement.style.transform = `perspective(1000px) rotateY(${offsetX}deg) rotateX(${-offsetY}deg)`;
  cardElement.style.transition = "none";
}
