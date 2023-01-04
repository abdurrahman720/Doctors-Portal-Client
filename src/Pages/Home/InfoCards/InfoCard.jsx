import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card card-side m-2 md:p-5 shadow-xl ${bgClass}`} >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body text-white">
              <h2 className="card-title">{name }</h2>
              <p>{description }</p>
   
          </div>
          
    </div>
  );
};

export default InfoCard;
