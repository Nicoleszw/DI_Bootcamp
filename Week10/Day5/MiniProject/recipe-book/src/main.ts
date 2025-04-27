import { v4 as uuidv4 } from "uuid";
import { RecipeItem } from "./model/RecipeItem";
import { RecipeCollection } from "./model/RecipeCollection";
import { RecipeTemplate } from "./templates/RecipeTemplate";

const collection = new RecipeCollection();
const template = new RecipeTemplate("recipeContainer");

function refreshUI() {
  template.render(collection.getAll(), {
    onDelete: (id) => {
      collection.remove(id);
      refreshUI();
    },
    onToggleFavorite: (id) => {
      collection.toggleFavorite(id);
      refreshUI();
    }
  });
}

document.getElementById("recipeEntryForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("recipeTitle") as HTMLInputElement;
  const ingredientsInput = document.getElementById("ingredients") as HTMLTextAreaElement;
  const instructionsInput = document.getElementById("instructions") as HTMLTextAreaElement;

  const newRecipe = new RecipeItem(
    uuidv4(),
    titleInput.value,
    ingredientsInput.value.split("\n").filter(Boolean),
    instructionsInput.value
  );

  collection.add(newRecipe);
  refreshUI();
  (e.target as HTMLFormElement).reset();
});

document.getElementById("clearRecipesButton")?.addEventListener("click", () => {
  collection.clearAll();
  refreshUI();
});

refreshUI();
