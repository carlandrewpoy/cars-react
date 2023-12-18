import React from "react";

export default function Car({ car }) {
  return (
    <div className="bg-  border w-52">
      <h1>Make: {car.make}</h1>
      <h3>Model: {car.model}</h3>
      <h4>Year: {car.year}</h4>
      <p>Transmission: {car.transmission}</p>
      <p>Fuel: {car.fuel_type}</p>
    </div>
  );
}
