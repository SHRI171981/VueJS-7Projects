<script setup>

import {onMounted} from 'vue';

import EventCard from "./EventCard.vue"
import LoadingEventsCard from './LoadingEventsCard.vue';
import SingleCard from './SingleCard.vue';
import ErrorComp from './ErrorComp.vue';

import useEvents from '../composables/useEvents';
import useUpdateBookings from '../composables/useUpdateBookings';

const {loading,events,errorVal,fetchEvents} = useEvents();
const {handleRegistration} = useUpdateBookings();

onMounted(() => fetchEvents());

defineEmits(['register'])

</script>

<template>
    <SingleCard class="p-4 gap-4">
        <h2 class="text-2xl font-medium text-center">All Events</h2>
    </SingleCard>

    <template v-if="!errorVal">
      <ErrorComp @click="fetchEvents()"/>
    </template>
    <template v-else>
      <section class="grid grid-cols-2 gap-12">
        <template v-if="!loading">
            <template v-if="events.length">
                <EventCard v-for="event in events" :key="event.id" @register = "handleRegistration(event)"
                :title="event.title"
                :when="event.date"
                :description="event.description"
                />
            </template>
            <template v-else>
                <div class="text-center text-black text-2xl h-8 col-span-3 font-medium">
                        No Events yet!          
                </div>
                
            </template>

        </template>

        <template v-else>
          <LoadingEventsCard v-for="i in 4" :key="i"></LoadingEventsCard>
        </template>
      </section>
    </template>
</template>