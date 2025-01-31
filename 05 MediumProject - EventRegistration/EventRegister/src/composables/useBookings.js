import {ref,computed} from 'vue';

const loading = ref(false) // global variables
const bookings = ref([]); // can be used anywhere in the app now
const error = ref(null); // check if there's an error in booking

const fetchBookings = async () => {
    loading.value = true;
    error.value = null;
    try{
      const response = await fetch("http://localhost:3001/bookings");
      bookings.value = await response.json();
    }
    catch(e){
        error.value = e;
    }
    finally{
      loading.value = false;
    }
}

const findBookingById = (id) => {
    return bookings.value.findIndex((b => b.id == id)); // to find ID
}

const errorVal = computed(() => error.value === null)

export default function useBookings(){
    return {
        bookings,
        loading,
        fetchBookings,
        errorVal,
        findBookingById
    };
}