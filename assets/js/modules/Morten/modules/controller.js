import CocktailModel from './model.js';
import CocktailView from './view.js';

export default class CocktailController {
    constructor() {
        this.model = new CocktailModel();
        this.view = new CocktailView();

        // Bind view buttons til controller metoder med debug logs
        this.view.bindNext(() => {
            console.log('Next button clicked');
            this.handleNextCocktail();
        });
        this.view.bindPrevious(() => {
            console.log('Previous button clicked');
            this.handlePreviousCocktail();
        });

        // Hent den første cocktail når appen starter
        this.loadCocktail();
    }

    async loadCocktail() {
        try {
            const cocktail = await this.model.fetchRandomCocktail();
            this.view.displayCocktail(cocktail);
            console.log('Loaded cocktail:', cocktail);
        } catch (error) {
            console.error("Could not load cocktail:", error);
        }
    }

    async handleNextCocktail() {
        try {
            const cocktail = await this.model.getNextCocktail();
            this.view.displayCocktail(cocktail);
            console.log('Loaded next cocktail:', cocktail);
        } catch (error) {
            console.error("Could not load next cocktail:", error);
        }
    }

    handlePreviousCocktail() {
        const cocktail = this.model.getPreviousCocktail();
        if (cocktail) {
            this.view.displayCocktail(cocktail);
            console.log('Loaded previous cocktail:', cocktail);
        } else {
            console.warn("No previous cocktail available.");
        }
    }
}
