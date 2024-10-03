const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export default class CocktailModel {
    constructor() {
        this.cocktails = [];
        this.currentIndex = -1;
    }

    async fetchRandomCocktail() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Failed to fetch the cocktail");
            }
            const data = await response.json();
            console.log("Fetched data:", data);
            this.cocktails.push(data.drinks[0]);
            this.currentIndex = this.cocktails.length - 1;
            return data.drinks[0];
        } catch (error) {
            console.error("Error fetching cocktail:", error);
            throw error;
        }
    }

    async getNextCocktail() {
        if (this.currentIndex < this.cocktails.length - 1) {
            this.currentIndex++;
            return this.getCurrentCocktail();
        } else {
            return await this.fetchRandomCocktail();
        }
    }

    getPreviousCocktail() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.getCurrentCocktail();
        }
        return null;
    }

    getCurrentCocktail() {
        return this.cocktails[this.currentIndex];
    }
}
