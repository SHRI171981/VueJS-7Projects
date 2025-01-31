import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Favorites from '@/views/Favorites.vue';
import AddRecipe from '@/views/AddRecipe.vue';
import RecipeView from '@/views/RecipeView.vue';
import NotFound from '@/views/NotFound.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // alias: ['/home'] -> alias 
    },
    {
      path: '/home',
      redirect: '/' // -> simply redirect instead
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
    },
    {
      path: '/add-recipe',
      name: 'addRecipe',
      component: AddRecipe,
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: RecipeView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    }
  ],
});

export default router;
