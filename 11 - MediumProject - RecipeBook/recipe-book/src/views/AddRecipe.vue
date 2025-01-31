<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const name = ref('');
const description = ref('');

const store = useRecipeStore();
const router = useRouter();

const addRecipe = () => { // this is an action
    const recipe = store.addRecipe({
        name: name.value,
        description: description.value
    })
    router.push({
        name: 'recipe',
        params: {
            id: recipe.id
        }
    })
}

</script>

<template>
    <div>
        AddRecipe
    </div>
    <form @submit.prevent="addRecipe">
        <div>
            <label> Name: </label>
            <input type="text" v-model="name" required />
        </div>
        <div>
            <label> Description: </label>
            <textarea v-model="description" required />
        </div>

        <button type="submit">
            Add
        </button>
    </form>
</template>