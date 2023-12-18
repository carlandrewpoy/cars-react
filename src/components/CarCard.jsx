import React, { useState } from "react";
import { generateCarImageUrl } from "../hooks/api/cars";
import Modal from "./Modal";
import Carousel from "./Carousel";

export default function CarCard({ car }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="card w-60 bg-base-100 shadow-xl">
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <div className="flex justify-end ">
            <h1
              onClick={handleCloseModal}
              className=" hover:bg-transparent text-xl font-bold mt-[-10px] cursor-pointer"
            >
              x
            </h1>
          </div>

          <figure className="flex flex-col">
            <img
              src={generateCarImageUrl(car)}
              alt="Shoes"
              className="object-contain "
              width={200}
              height={200}
            />
            <div className="flex">
              <img
                src={generateCarImageUrl(car, 29)}
                alt="Shoes"
                className="object-contain "
                width={160}
                height={160}
              />
              <img
                src={generateCarImageUrl(car, 33)}
                alt="Shoes"
                className="object-contain "
                width={160}
                height={160}
              />
              <img
                src={generateCarImageUrl(car, 13)}
                alt="Shoes"
                className="object-contain "
                width={160}
                height={160}
              />
            </div>
          </figure>
          <div className="py-3">
            <h2 className="text-xl font-semibold text-transform: capitalize">
              {car.make}
            </h2>
            <div className="flex py-1 justify-between">
              <h1>class</h1>
              <h1>{car.class}</h1>
            </div>
            <div className="flex py-1 justify-between">
              <h1>model</h1>
              <h1>{car.model}</h1>
            </div>
            <div className="flex py-1 justify-between">
              <h1>year</h1>
              <h1>{car.year}</h1>
            </div>
            <button className="btn w-full mt-4">
              <a href="/login">Continue</a>
            </button>
          </div>
        </Modal>
        {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} car={car} /> */}
        <figure>
          <img
            src={generateCarImageUrl(car)}
            alt="Shoes"
            className="object-contain"
          />
        </figure>
        <div className="py-3">
          <h2 className="p-3 text-lg font-semibold text-transform: capitalize">
            {car.make}
          </h2>
          <h2 className="px-5 text-transform: capitalize">{car.model}</h2>
          <h2 className="px-5 text-transform: capitalize">{car.class}</h2>
          <h2 className="px-5 text-transform: capitalize">{car.year}</h2>
          <button
            className="btn btn-ghost hover:bg-transparent"
            onClick={handleOpenModal}
          >
            View more
          </button>
        </div>
        {/* <div className="card-body">
          <h2 className="text-transform: capitalize">{car.class}</h2>
        </div> */}
      </div>
    </div>
  );
}
