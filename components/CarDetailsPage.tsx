import React from 'react';
import { useParams } from 'react-router-dom';
import carData from '../data/CarDetails.json';

interface Car {
  make: string;
  model: string;
  image: string;
  keyDetails: string;
  details: {
    year: number;
    color: string;
    price: number;
    mileage: number;
    transmission: string;
    fuelType: string;
    engine: string;
  };
}

const CarDetailsPage: React.FC = () => {
  const { make, model } = useParams<{ make: string; model: string }>();

  // Find the car in the data based on make and model
  const car: Car | undefined = carData.find((car: Car) => car.make === make && car.model === model);

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="car-details-page">
      <h2>{car.make} {car.model}</h2>
      <img src={car.image} alt="Car" />
      <p><strong>Key Details:</strong> {car.keyDetails}</p>
      <p><strong>Year:</strong> {car.details.year}</p>
      <p><strong>Color:</strong> {car.details.color}</p>
      <p><strong>Price:</strong> ${car.details.price.toLocaleString()}</p>
      <p><strong>Mileage:</strong> {car.details.mileage.toLocaleString()} miles</p>
      <p><strong>Transmission:</strong> {car.details.transmission}</p>
      <p><strong>Fuel Type:</strong> {car.details.fuelType}</p>
      <p><strong>Engine:</strong> {car.details.engine}</p>
    </div>
  );
}

export default CarDetailsPage;
