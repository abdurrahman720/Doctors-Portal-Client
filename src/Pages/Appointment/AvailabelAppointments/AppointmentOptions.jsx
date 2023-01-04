import React from "react";
import PrimaryButton from "../../../Components/PrimaryButton";

const AppointmentOptions = ({ appointmentOptions }) => {
  const { name, slots } = appointmentOptions;
  console.log(name);
  return (
    <div className="card p-10 shadow-xl">
      <div className="card-body text-center">
        <h2 className=" text-2xl text-secondary text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : 'Try Another Day!'}</p>
              <p>{slots.length} {slots.length>1 ? 'spaces' : 'space' } available</p>
        <div className="card-actions justify-center">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
