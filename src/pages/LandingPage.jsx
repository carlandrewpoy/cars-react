import { useEffect, useState } from "react";
import { GetCars } from "../hooks/api/cars";
import Dropdown from "../components/dropdown";
import Car from "../components/car";
import { useCarContext } from "../utils/CarContext";
import CarCard from "../components/CarCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingPage() {
  const { cars } = useCarContext();
  console.log({ cars });

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <h1 className="text-4xl font-semibold text-center my-5">
          General Motors
        </h1>
        <div className="flex justify-center">
          <Dropdown />
        </div>
        <div className="flex justify-center ">
          <div className="grid grid-cols-3 gap-10 max-w-screen-lg">
            {cars?.map((car, key) => (
              <CarCard key={key} car={car} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
