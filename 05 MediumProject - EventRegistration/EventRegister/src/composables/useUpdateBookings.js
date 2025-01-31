import useBookings from "./useBookings";

const {bookings,findBookingById,} = useBookings();

const handleRegistration = async (event) => {
    if (bookings.value.some(
        booking => booking.eventId === event.id &&
        booking.userId === 1
    )){
        alert ("You are already registered");
        return;
    }

    const newBooking = {
        id: Date.now().toString(), // unique id
        userId: 1,
        eventId: event.id,
        eventTitle: event.title,
        status: 'pending'
    };
    bookings.value.push(newBooking);
    try{
        const response = await fetch("http://localhost:3001/bookings",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        ...newBooking, // destructuring
        status: 'confirmed'
            })
        });

        if (response.ok){
            const index = findBookingById(newBooking.id)
            bookings.value[index] = await response.json(); // replace index with response
        }
        else{
            throw new Error("Failed to confirm booking")
        };
    }  
    catch(e){
        console.log(e);
        bookings.value = bookings.value.filter(
        (b) => b.id != newBooking.id // remove newBooking element
        );
    }
}


const cancelBooking = async (booking) => {
    const index = findBookingById(booking.id);
    const originalBooking = bookings.value[index];
    bookings.value.splice(index,1); // remove element immidiately
    
    try{
        const response = await fetch(`http://localhost:3001/bookings/${booking.id}`,
        {
            method: 'DELETE' // delete based on id
        });
        if (!response.ok){
        throw new Error("Could not be cancelled");
        }
    
    }catch(e){
        console.log(e);
        bookings.value.splice(index,0,originalBooking); // add booking back
        console.log(index);
    }
}

export default function useUpdateBookings(){
    return {
        handleRegistration,
        cancelBooking
    }
}