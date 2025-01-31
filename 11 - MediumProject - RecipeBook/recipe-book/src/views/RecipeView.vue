<script setup lang="ts">
import { useRoute} from 'vue-router';
import {computed} from 'vue';
import { useRecipeStore } from '@/stores/recipe';


const route = useRoute();
const recipeStore = useRecipeStore();

const recipe = computed(() => recipeStore
.getRecipeByID(route.params.id as string));



</script>



<template>
    <div>
        <h1>
          {{  recipe?.name }}
        </h1>
        <p>
          {{  recipe?.description }}
        </p>
    </div>
    
</template>