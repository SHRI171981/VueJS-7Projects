<script setup>
import { onMounted } from 'vue';
import SingleCard from './SingleCard.vue';
import BookingComp from './BookingComp.vue';
import useBookings from '../composables/useBookings';
import LoadingBookingCard from './LoadingBookingCard.vue';
import ErrorComp from './ErrorComp.vue';
import useUpdateBookings from '../composables/useUpdateBookings';

const {bookings,loading,fetchBookings,errorVal} = useBookings();
const {cancelBooking} = useUpdateBookings();

onMounted(() => {
    fetchBookings()
});

</script>

<template>
    <SingleCard>
                  <h2 class="text-2xl font-medium text-center">
                  Your Bookings
                  </h2>     
    </SingleCard>

    <template v-if="!errorVal">
        <ErrorComp @click="fetchBookings()"/>
    </template>
    <template v-else>
        <template v-if="!loading">
        <BookingComp v-for="booking in bookings" :key="booking.id"
        :title="booking.eventTitle"
        :status="booking.status"
        @cancel = "cancelBooking(booking)"/>
    </template>
    <template v-else>
        <LoadingBookingCard></LoadingBookingCard>
    </template>
    </template>
</template>