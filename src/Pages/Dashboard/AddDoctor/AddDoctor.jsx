import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imgbb_key;
  

  const { data: specialties = [], isLoading } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5001/appointmentSpecialty`);
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
      console.log(data);
      const img = data.image[0];
      const formData = new FormData()
      formData.append('image', img);
      const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
      fetch(url, {
          method: 'POST',
          body: formData
      }).then(res => res.json()).then(imgData => {
          console.log(imgData);
          if (imgData.success) {
              console.log(imgData.data.url);
              const doctor = {
                  name: data.name,
                  email: data.email,
                  specialty: data.specialty,
                  image: imgData.data.url
              }
              //save doctor info to database
              fetch(`http://localhost:5001/doctors`, {
                  method: 'POST',
                  headers: {
                      'content-type': 'application/json',
                      authorization: `Bearer ${localStorage.getItem('doctosToken')}`
                  },
                  body: JSON.stringify(doctor)
              })
                  .then(res => res.json())
                  .then(data => {
                      toast.success("Doctor added!")
                      console.log(data);
                      navigate('/dashboard/manage-doctors')
              })
          }
      })
  };    

  if (isLoading) {
    return (
      <div className="">
        <progress className="progress w-full"></progress>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-4xl">Add a doctor</h2>
      <form className="w-3/4 mx-auto" onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            {...register("name", { required: "Name is required" })}
            placeholder="Full Name"
          />
          {errors.name && (
            <p className="text-red-600" role="alert">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-600" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty", { required: "Specialty is required" })}
            className="select select-bordered w-full "
          >
            {/* <option disabled selected>
              Please select
            </option> */}
            {specialties.map((specialty) => (
              <option key={specialty._id}>{specialty.name}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered"
            {...register("image", { required: "photo is required" })}
            placeholder="Full Name"
          />
          {errors.image && (
            <p className="text-red-600" role="alert">
              {errors.image?.message}
            </p>
          )}
        </div>

        <input
          className="btn btn-accent w-full mt-5"
          type="submit"
          value="Add Doctor"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
