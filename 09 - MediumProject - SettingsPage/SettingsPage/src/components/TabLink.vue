<script setup lang="ts">

import {ref,computed} from 'vue';
import type { TabKey } from '@/types';

import type { Tab } from '@/types';

const props = defineProps<{
    currentTab: string;
    tab:Tab;
}>();

defineEmits<{
    click: [];
}>();

const isActive = computed(() => props.currentTab === props.tab.key)

</script>

<template>
    <button @click="$emit('click')" :class="{'p-8':true,
    'border-b-4 border-blue-600 text-blue-600':isActive}">
        {{ tab.label }}
    </button>
</template>
