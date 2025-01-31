<script setup>
import ButtonComp from './ButtonComp.vue';
import SingleCard from './SingleCard.vue';

defineEmits(['click'])
</script>

<template>
    <div class="align-middle w-5/12 mx-auto text-center">
        <SingleCard class="justify-center">
            <h1 class="text-2xl font-medium">Could not fetch data</h1>
            <ButtonComp @click="$emit('click')" variant="error">
                Retry?
            </ButtonComp>
        </SingleCard>
        
    </div>
    
</template>