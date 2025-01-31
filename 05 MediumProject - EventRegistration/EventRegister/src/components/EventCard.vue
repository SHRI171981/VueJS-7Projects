<script setup>
import SectionCard from './SectionCard.vue';
import ButtonComp from './ButtonComp.vue';
defineProps({
    title: String,
    when: String,
    description: String,
})

defineEmits(['register'])
</script>

<template>
    <SectionCard>
        <template #header>
            {{ title }}
        </template>
        <template #default>
            {{ when }}
        </template>
        <template #register>
            {{ description }}
            <section class="flex justify-end p-4">
                <ButtonComp @click="$emit('register')" variant="register">
                    Register
                </ButtonComp>
            </section>
        </template>
    </SectionCard>
</template>

