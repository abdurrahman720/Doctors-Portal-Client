import React, { useEffect, useState } from 'react';
import { format } from "date-fns";
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
        
    },[])
    return (
        <section className="mt-16">
            <p className="text-secondary text-center text-2xl font-bold">Available Appointments on {format(selectedDate, 'PP')}  </p>
            <p className="text-center">Please select a service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    appointmentOptions.map(appointmentOptions=><AppointmentOptions key={appointmentOptions._id} appointmentOptions={appointmentOptions}></AppointmentOptions>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;