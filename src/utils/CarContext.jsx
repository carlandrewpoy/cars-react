import React, { createContext, useContext, useEffect, useState } from "react";
import { GetCars } from "../hooks/api/cars";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [make, setmake] = useState("chevrolet");
  const [year, setyear] = useState("2015");
  const [fuel, setfuel] = useState("gas");
  const [model, setmodel] = useState();

  const [cars, setcars] = useState();

  useEffect(() => {
    async function getCar() {
      const params = {
        model: model,
        year: year,
        make: make,
        fuel_type: fuel,
        limit: 6,
      };
      const cars = await GetCars(params);
      setcars(cars);
    }
    getCar();
  }, [make, year, fuel, model]);

  const updateSelectedMake = (make) => {
    setmake(make);
  };

  const updateSelectedYear = (year) => {
    setyear(year);
  };
  const updateSelectedFuel = (fuel) => {
    setfuel(fuel);
  };
  const updateSelectedModel = (model) => {
    setmodel(model);
  };

  const values = {
    updateSelectedMake,
    updateSelectedYear,
    updateSelectedFuel,
    updateSelectedModel,
    make,
    year,
    fuel,
    model,
    cars,
  };

  return <CarContext.Provider value={values}>{children}</CarContext.Provider>;
};

export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCarContext must be used within a CarProvider");
  }
  return context;
};
