import React from "react";

const ConfirmationModal = ({ title, message, closeModal,successAction,modaldata,successButton }) => {
   
  return (
    <div>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal">
              <div className="modal-box relative">
              <label onClick={closeModal} htmlFor="confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label onClick={()=>successAction(modaldata)} htmlFor="confirm-modal" className="btn btn-error">
            {successButton}
            </label>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
