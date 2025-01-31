<script setup lang="ts">
import SectionCard from './SectionCard.vue';
import ButtonComp from './ButtonComp.vue';

</script>

<template>
    <SectionCard class="animate-pulse">
        <template #header>
            <div class="h-8" ></div>
        </template>
        <template #default>
            <div class="h-8"></div>
        </template>
        <template #register>
            <div class="h-32">
                <div class="h-20"></div>
                <section class="flex justify-end p-4">
                    <ButtonComp variant="default">
                        <div class="w-12 h-3"></div>
                    </ButtonComp>
                </section>
            </div>
        </template>
    </SectionCard>
</template>