<script setup>
import SectionCard from './SectionCard.vue';
import ButtonComp from './ButtonComp.vue';
</script>

<template>
    <SectionCard v-for="i in 4" :key="i" class="animate-pulse">
        <template #register>
            <div class="h-9"></div>
            <section class="flex justify-end">
                <ButtonComp variant="default">
                    <div class="w-10 h-4"></div>
                </ButtonComp>
            </section>
        </template>    
    </SectionCard>
</template>