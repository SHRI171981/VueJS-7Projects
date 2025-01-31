<script setup>
import SingleCard from './SingleCard.vue';
</script>

<template>
    <div class="grid border border-gray-600 bg-blue-800 rounded-md gap-3 p-2 text-2xl font-extrabold" >
        <SingleCard v-if="$slots.header">
            <slot name="header"></slot>
        </SingleCard>
        <SingleCard v-if="$slots.default">
            <slot></slot>
        </SingleCard>
        <SingleCard v-if="$slots.register">
            <slot name="register"></slot>
        </SingleCard>
    </div>
</template>