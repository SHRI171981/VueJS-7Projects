<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';

const {privacy} = useSettings();

</script>

<template>
    <div>

      <h2 class="text-2xl mb-4">Privacy</h2>
      <form class="space-y-4 mx-auto">
        
        <div class="flex gap-1 text-center">
          <input type="checkbox" v-model="privacy.searchEngineIndexing"/>
          <label>Search Engine Indexing</label>
        </div>
        <div>
          <label>Visibility</label>
          <select v-model="privacy.visibility">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button type="submit" class="btn-primary">Save</button>
      </form>
    </div>
</template>