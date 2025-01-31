<script setup>
const variants = {
    'default':'bg-gray-900 enabled:hover:bg-gray-600',
    'register':'bg-blue-900 enabled:hover:bg-blue-600',
    'cancel':'bg-red-900 enabled:hover:bg-red-600',
    'error':'bg-green-900 enabled:hover:bg-green-600'
} // color variants
defineProps({
    variant:{
        type: String,
        default: 'default'
    }
})
defineEmits(['click'])
// dynamically check variant
</script>

<template>
    <button :class="['text-sm text-white  font-medium border border-black rounded-full px-3 py-1',
                    variants[variant] ?? variants.default]" 
        @click = "$emit('click')"> 
            <slot></slot>
        </button>
</template>
