import React from 'react';

const ShowAllServices = ({FoodService}) => {
    const {title,img,price,rating,description} = FoodService;
    return (
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price:$ {price}</p>
    <p>{description.slice(0,100)}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ShowAllServices;