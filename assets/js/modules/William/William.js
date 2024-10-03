import getData from "./modules/getData/getData.js";
import displayCardList from "./modules/cardlistView/cardlistView.js";

export let section = document.createElement("section");
section.id = "william";
document.body.appendChild(section);

export default function setupWilliam() {
  console.log("Hello from William");
  getData().then((data) => {
    section.innerHTML = "";
    // console.log(data.data);
    displayCardList(data.data);
  });
}
