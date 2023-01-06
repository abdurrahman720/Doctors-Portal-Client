import React, { useState } from 'react';
import { format } from "date-fns";
import AppointmentOptions from './AppointmentOptions';
import BookingModal from './BookingModal';
import { useQuery } from '@tanstack/react-query';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const {data : appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5001/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
 })

    // useEffect(() => {
    //     fetch(`http://localhost:5001/appointmentOptions`)
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
        
    // },[])
    return (
        <section className="mt-16">
            <p className="text-secondary text-center text-2xl font-bold">Available Appointments on {format(selectedDate, 'PP')}  </p>
            <p className="text-center">Please select a service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    appointmentOptions.map(appointmentOptions=><AppointmentOptions key={appointmentOptions._id} appointmentOptions={appointmentOptions} setTreatment={setTreatment}></AppointmentOptions>)
                }
            </div>
           {treatment &&  <BookingModal  refetch={refetch} treatment={treatment} selectedDate={selectedDate} setTreatment={setTreatment}></BookingModal>}
        </section>

    );
};

export default AvailableAppointment;