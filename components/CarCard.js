import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-4 mr-8 mb-8">
      <img src={car.image_url} alt={`${car.make} ${car.model}`} className="w-full h-36 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{car.make} {car.model}</h2>
      <p className="text-gray-600">{car.key_details}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-700">${car.price_per_day} per day</p>
        {car.available ? (
          <span className="text-green-600">Available</span>
        ) : (
          <span className="text-red-600">Not available</span>
        )}
      </div>
    </div>
  );
};

export default CarCard;
