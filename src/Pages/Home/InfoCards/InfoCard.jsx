import React from "react";

const InfoCard = ({ card }) => {
    const {name,description,icon, bgclass} = card;
  return (
    <div className={`card card-side p-5 shadow-xl ${bgclass}`} >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
              <h2 className="card-title">{name }</h2>
              <p>{description }</p>
   
          </div>
          
    </div>
  );
};

export default InfoCard;
