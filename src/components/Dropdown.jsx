import React, { useEffect, useState } from "react";
import {
  buickModels,
  cadillacModels,
  chevroletModels,
  fuels,
  gmcModels,
  manufacturers,
  yearsOfProduction,
} from "../utils/constants";
import { useCarContext } from "../utils/CarContext";

export default function Dropdown() {
  const [modelList, setmodelList] = useState(chevroletModels);
  const {
    make,
    year,
    fuel,
    model,
    updateSelectedMake,
    updateSelectedYear,
    updateSelectedFuel,
    updateSelectedModel,
  } = useCarContext();

  useEffect(() => {
    if (make === "Chevrolet") setmodelList(chevroletModels);
    if (make === "Buick") setmodelList(buickModels);
    if (make === "GMC") setmodelList(gmcModels);
    if (make === "Cadillac") setmodelList(cadillacModels);
  }, [make]);

  return (
    <div className="flex gap-10 mb-5">
      <div>
        <label className="form-control w-full max-w-xs">
          <select
            value={make}
            onChange={(event) => updateSelectedMake(event.target.value)}
            className="select select-bordered"
          >
            {/* <option defaultValue="">Make</option> */}
            {manufacturers?.map((manufacturer) => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <select
            value={year}
            onChange={(event) => updateSelectedYear(event.target.value)}
            className="select select-bordered"
          >
            {/* <option defaultValue="">Year</option> */}
            {yearsOfProduction?.map((year) => (
              <option key={year.value} value={year.value}>
                {year.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      {/* <div>
        <label className="form-control w-full max-w-xs">
          <select
            value={model}
            onChange={(event) => updateSelectedModel(event.target.value)}
            className="select select-bordered"
          >
            <option defaultValue="">Year</option>
            {modelList?.map((chevrolet, key) => (
              <option key={key} value={chevrolet}>
                {chevrolet}
              </option>
            ))}
          </select>
        </label>
      </div> */}
      <div>
        <label className="form-control w-full max-w-xs">
          <select
            value={fuel}
            onChange={(event) => updateSelectedFuel(event.target.value)}
            className="select select-bordered"
          >
            {/* <option defaultValue="">Fuel</option> */}
            {fuels?.map((fuel) => (
              <option key={fuel.value} value={fuel.value}>
                {fuel.title}
              </option>
            ))}
          </select>
        </label>
      </div>
      {/* <div>
        <select
          value={year}
          onChange={(event) => updateSelectedYear(event.target.value)}
        >
          <option value="">Year</option>
          {yearsOfProduction?.map((year) => (
            <option key={year.value} value={year.value}>
              {year.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          value={fuel}
          onChange={(event) => updateSelectedFuel(event.target.value)}
        >
          <option value="">Fuel</option>
          {fuels?.map((fuel) => (
            <option key={fuel.value} value={fuel.value}>
              {fuel.title}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Continue</button> */}
    </div>
  );
}
