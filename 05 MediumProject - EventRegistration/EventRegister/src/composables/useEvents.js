
import {ref,computed} from 'vue';

const error = ref(null); // check if there's an error in events

const loading = ref(false);
const events = ref([]);

const fetchEvents = async () => {
    loading.value = true;
    error.value = null;
    try{
    const response = await fetch("http://localhost:3001/events");
    events.value = await response.json();
    }
    catch(e){
    error.value = e;
    }
    finally{
    loading.value = false;
    }
}

const errorVal = computed(() => error.value === null);

export default function useEvents(){
    return {
        events,
        loading,
        fetchEvents,
        errorVal
    }
}