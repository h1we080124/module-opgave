export default function setupFrederik() {
  startSetup();
}

import fetchLyrics from "./fetchLyrics.js";

function startSetup() {
  const section = document.createElement("section");
  section.id = "frederik";

  const h1 = document.createElement("h1");
  h1.textContent = "Søg efter lyrics";

  const p = document.createElement("p");
  p.textContent = "Indtast kunstner og titel";

  const inputArtist = document.createElement("input");
  inputArtist.id = "artist-input";
  inputArtist.placeholder = "Kunstner";
  inputArtist.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchLyrics();
    }
  });

  const inputTitle = document.createElement("input");
  inputTitle.id = "title-input";
  inputTitle.placeholder = "Sang titel";
  inputTitle.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchLyrics();
    }
  });

  const button = document.createElement("button");
  button.id = "search-button";
  button.textContent = "Søg";
  button.addEventListener("click", searchLyrics);

  document.body.appendChild(section);
  section.appendChild(h1);
  section.appendChild(p);
  section.appendChild(inputArtist);
  section.appendChild(inputTitle);
  section.appendChild(button);
}

function searchLyrics() {
  const artist = document.getElementById("artist-input").value;
  const title = document.getElementById("title-input").value;
  if (!artist || !title) {
    alert("Please enter artist and title");
    return;
  } else {
    fetchLyrics(artist, title);
    
  }
}