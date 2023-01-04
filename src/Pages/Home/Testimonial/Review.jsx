import React from "react";

const Review = ({ review }) => {
  const { name, image, review: userReview, location } = review;
  return (
    <div className="card shadow">
      <div className="card-body">
        <p>{userReview}</p>
        <div className="flex items-center">
          <div className="avatar mr-2">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt="user" />
            </div>
                  </div>
                  <div>
                      <h5 className="text-lg font-bold">{name }</h5>
                      <h5 className="text-lg">{location }</h5>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
