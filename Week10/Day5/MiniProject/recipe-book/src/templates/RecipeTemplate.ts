import { RecipeItem } from "../model/RecipeItem";

export class RecipeTemplate {
  private container: HTMLElement;

  constructor(containerId: string) {
    const container = document.getElementById(containerId);
    if (!container) throw new Error("Container not found");
    this.container = container;
  }

  render(recipes: RecipeItem[], handlers: {
    onDelete: (id: string) => void,
    onToggleFavorite: (id: string) => void
  }): void {
    this.container.innerHTML = "";

    recipes.forEach(recipe => {
      const card = document.createElement("div");
      card.className = "recipe-card";

      const title = document.createElement("h2");
      title.textContent = recipe.title;
      if (recipe.isFavorite) title.classList.add("favorite");

      const ingredients = document.createElement("ul");
      recipe.ingredients.forEach(i => {
        const li = document.createElement("li");
        li.textContent = i;
        ingredients.appendChild(li);
      });

      const instructions = document.createElement("p");
      instructions.textContent = recipe.instructions;

      const favBtn = document.createElement("button");
      favBtn.textContent = recipe.isFavorite ? "Unfavorite" : "Favorite";
      favBtn.onclick = () => handlers.onToggleFavorite(recipe.id);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => handlers.onDelete(recipe.id);

      card.append(title, ingredients, instructions, favBtn, deleteBtn);
      this.container.appendChild(card);
    });
  }
}
