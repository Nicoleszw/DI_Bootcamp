export interface IRecipeItem {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
    isFavorite: boolean;
  }
  
  export class RecipeItem implements IRecipeItem {
    constructor(
      public id: string,
      public title: string,
      public ingredients: string[],
      public instructions: string,
      public isFavorite: boolean = false
    ) {}
  }
  