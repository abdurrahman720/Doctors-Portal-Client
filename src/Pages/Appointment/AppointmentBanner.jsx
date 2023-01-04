import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {

  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }
  return (
    <header className="my-6">
      <div className="hero  ">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img src={chair} className="rounded-lg shadow-2xl lg:w-1/2" alt="" />
          <div className="mr-10 shadow-2xl">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              footer={footer}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
