import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ConfirmationModal from "./ConfirmationModal";

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)

  const { data: doctors = [], isLoading, refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5001/doctors`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("doctosToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
    
    if (isLoading) {
        return <div className=""><progress className="progress w-full"></progress></div> 
    }


    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handleDeleteDoctor = (doctor) => {
        fetch(`http://localhost:5001/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctorsToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    toast.success("Doctor deleted");
                    refetch()
                }
            
          
        })

    }
    
  return (
    <div>
      <h2 className="text-3xl">Manage Doctors: {doctors?.length} </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 h-24 rounded-full">
                      <img src={doctor.image} alt={doctor.name} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                    <td>
                    <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirm-modal" className="btn btn-xs btn-error">Delete</label>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
          {
              deletingDoctor && <ConfirmationModal title={`Are your sure to delete ${deletingDoctor.name} `}
                  message={`Here is the details of this doctor:  ${deletingDoctor.name}, email: ${deletingDoctor.email} , specialty: ${deletingDoctor.specialty}`} setDeletingDoctor={setDeletingDoctor} closeModal={closeModal} successButton="Delete" successAction={handleDeleteDoctor}
                  modaldata= {deletingDoctor}
              >
                  
              </ConfirmationModal>
          }
    </div>
  );
};

export default ManageDoctors;
