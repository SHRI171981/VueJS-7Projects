<script setup lang="ts">
import { computed } from 'vue';
import ButtonComp from './ButtonComp.vue';
import SectionCard from './SectionCard.vue';
import { LoaderCircle, Check } from 'lucide-vue-next';

defineEmits(['cancel','register'])
const props = defineProps({
    title: String,
    status: String
})

const pending = computed(() => props.status === 'pending');
const icon = computed(() => (pending.value ? LoaderCircle : Check));
</script>

<template>
    <SectionCard>
        <template #register>
            {{ props.title }}
            <div>
                <component :is="icon" :class="{'animate-spin':pending}"/>
            </div>
            <section class="flex justify-end">
                <ButtonComp @click="$emit('cancel')" variant="cancel">
                    Cancel
                </ButtonComp>
            </section>
        </template>    
    </SectionCard>
</template>