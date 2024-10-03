export default function setupMorten() {
  console.log("Hello from Morten");
}

import CocktailController from './controller.js';

document.addEventListener('DOMContentLoaded', () => {
    new CocktailController();
});
