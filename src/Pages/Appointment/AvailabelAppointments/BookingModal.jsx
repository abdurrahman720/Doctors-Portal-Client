import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Authentication/Context/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;

    const slot = form.slot.value;
    const patientName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      treatment: name,
      appointmentDate: date,
      slot,
      patient: patientName,
      email,
      phone,
    };

    fetch("http://localhost:5001/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Appointment booking confirmed!");
          setTreatment(null);
          refetch()
        }
      });
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{name}</h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              placeholder="Type here"
              value={date}
              disabled
              className=" input mt-5 input-bordered w-full"
            />
            <br />
            <select name="slot" className="select select-bordered w-full mt-5 ">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <br />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              defaultValue={user?.displayName}
              disabled
              className=" input mt-5 input-bordered w-full"
            />
            <br />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className=" input mt-5 input-bordered w-full"
            />
            <br />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className=" input mt-5 input-bordered w-full"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full mt-5"
            />
          </form>
          {/* <div className="modal-action">
            <label htmlFor="booking-modal" className="btn w-full">
              Submit
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
