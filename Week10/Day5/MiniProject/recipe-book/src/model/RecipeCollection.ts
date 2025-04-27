import { RecipeItem } from "./RecipeItem";

export class RecipeCollection {
  private recipes: RecipeItem[] = [];
  private storageKey = "recipeData";

  constructor() {
    this.loadFromLocalStorage();
  }

  add(recipe: RecipeItem): void {
    this.recipes.push(recipe);
    this.saveToLocalStorage();
  }

  remove(id: string): void {
    this.recipes = this.recipes.filter(r => r.id !== id);
    this.saveToLocalStorage();
  }

  toggleFavorite(id: string): void {
    const recipe = this.recipes.find(r => r.id === id);
    if (recipe) {
      recipe.isFavorite = !recipe.isFavorite;
      this.saveToLocalStorage();
    }
  }

  getAll(): RecipeItem[] {
    return this.recipes;
  }

  clearAll(): void {
    this.recipes = [];
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.recipes));
  }

  private loadFromLocalStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      const parsed = JSON.parse(data);
      this.recipes = parsed.map((r: any) => new RecipeItem(r.id, r.title, r.ingredients, r.instructions, r.isFavorite));
    }
  }
}
