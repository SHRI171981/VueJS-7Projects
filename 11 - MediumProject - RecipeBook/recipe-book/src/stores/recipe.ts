import { defineStore } from 'pinia';
import { ref,computed } from 'vue';

interface Recipe {
  id: string;
  name: string;
  description: string;
}

type NewRecipe = Omit<Recipe,"id">;

export const useRecipeStore = 
defineStore('recipe', () => {
  const recipes = ref<Recipe[]>([]);

  
  const addRecipe = (recipe: NewRecipe) => 
  {
    const newRecipe = {
      id:Date.now().toString(),
      ...recipe
   }   
    recipes.value.push(newRecipe);
    return newRecipe
  }

  const getRecipeByID = (id:string) => recipes.value
  .find(recipe => recipe.id === id);

  const recipeStore = useRecipeStore();
  const searchQuery = ref('');

  const filteredRecipes = computed(() => 
    recipes.value.filter(recipe => recipe.name
    .toLowerCase()
    .includes(searchQuery.value.toLowerCase()))
  )
 

  return { recipes, addRecipe, getRecipeByID, filteredRecipes, searchQuery };
});