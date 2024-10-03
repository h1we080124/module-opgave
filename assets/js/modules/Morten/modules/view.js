export default class CocktailView {
    constructor() {
        this.cocktailContainer = document.getElementById('cocktail');
        this.prevButton = document.getElementById('prev');
        this.nextButton = document.getElementById('next');

        console.log('cocktailContainer:', this.cocktailContainer);
        console.log('prevButton:', this.prevButton);
        console.log('nextButton:', this.nextButton);
    }

    displayCocktail(cocktail) {
        const { strDrink, strDrinkThumb, strInstructions } = cocktail;
        const ingredients = this.getIngredients(cocktail);
    
        this.cocktailContainer.innerHTML = `
            <div class="cocktail">
                <h2 class="cocktail-name">${strDrink}</h2>
                <div class="cocktail-image">
                    <img src="${strDrinkThumb}" alt="${strDrink}" />
                </div>
                <div class="cocktail-instructions">
                    <p>${strInstructions}</p>
                </div>
                <ul class="cocktail-ingredients">
                    ${ingredients.map(ing => `<li class="ingredient-item">${ing}</li>`).join('')}
                </ul>
            </div>
        `;
    
        console.log('Displayed cocktail:', strDrink);
    }

    getIngredients(cocktail) {
        let ingredients = [];
        for (let i = 1; i <= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}`];
            const measure = cocktail[`strMeasure${i}`];
            if (ingredient) {
                ingredients.push(`${measure ? measure : ""} ${ingredient}`);
            }
        }
        return ingredients;
    }

    bindNext(handler) {
        if (this.nextButton) {
            this.nextButton.addEventListener('click', handler);
            console.log('Next button bound');
        } else {
            console.error('Next button not found');
        }
    }

    bindPrevious(handler) {
        if (this.prevButton) {
            this.prevButton.addEventListener('click', handler);
            console.log('Previous button bound');
        } else {
            console.error('Previous button not found');
        }
    }
}
