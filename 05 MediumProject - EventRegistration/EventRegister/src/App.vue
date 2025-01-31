<script setup>

import BookingList from './components/BookingList.vue';
import EventList from './components/EventList.vue';

</script>


<template>
  <main class="container mx-auto my-10 space-y-10 w-11/12">

    <h1 class="text-4xl font-medium text-center">
      Event Booking App
    </h1>
      
    <div class="grid gap-4 border border-black p-4 bg-red-500 rounded-md">
      <EventList />
    </div>

    <div class="grid gap-4 border border-black p-4 bg-orange-600 rounded-md">
      <BookingList/>
    </div>
    
  </main>
</template>