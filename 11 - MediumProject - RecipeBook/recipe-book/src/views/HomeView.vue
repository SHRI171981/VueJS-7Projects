<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipe';
import {RouterLink} from 'vue-router';


const recipeStore = useRecipeStore();

</script>

<template>
  <main>
    <h1>Home</h1>
    <div>
      <input type="text" placeholder="SearchRecipes" v-model="recipeStore.searchQuery"/>
    </div>
    <nav v-if="recipeStore.filteredRecipes.length > 0">
      <ul>
        <li v-for="recipe in recipeStore.filteredRecipes" :key="recipe.id">
          <RouterLink :to="{name:'recipe',params:{id : 1}}">
            {{ recipe.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div v-else>
      No Recipes Found
    </div>
  </main>
</template>
