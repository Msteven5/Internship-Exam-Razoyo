import React from "react";
import { useEffect, useState } from "react";
import CarInfo from "./components/carInfo";

export default function Home() {

  //allows data to be global to distribute in car cards
  const [carData, setCars] = useState([]);
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    getAllCars();
    getMakes();
  }, []);

  //API call to grab all makes to put them in dropdown list
  const getMakes = () => {
    let carsURL = `https://exam.razoyo.com/api/cars`;
    fetch(carsURL)
      .then((res) => res.json())
      .then((response) => setMakes(response.makes));
  };

  //API call to grab all cars by default
  const getAllCars = () => {
    let carsURL = `https://exam.razoyo.com/api/cars`;
    fetch(carsURL)
      .then((res) => res.json())
      .then((response) => setCars(response.cars));
  };

  //API call to filter cars by make depending on user selection
  const filterCars = (make) => {
    let carURL = `https://exam.razoyo.com/api/cars?make=${make}`;
    fetch(carURL)
      .then((res) => res.json())
      .then((response) => setCars(response.cars));
  };

  //handles filter function above when option is selected
  const handleCarFilter = (event) => {
    const { value } = event.target;
    if (value === "") {
      getAllCars();
    } else {
      filterCars(value);
    }
  }

  return (
    <>
      <div className="m-auto w-50" id="carList">
        <div className="row mt-5" id="carContainer">

          <h4 className="text-end text-white mt-5">
            <span className="bg-dark p-2 me-2 rounded-3">Filter by make:</span>
            <select className="rounded-3 mt-5 p-2 text-center" onChange={handleCarFilter}>
              <option className="text-center" value="">All</option>
              {makes.map((make, index) => <option className="text-center" key={index}>{make}</option>)}
            </select>
          </h4>

          <div id="accordion mt-5">
            {carData.map((car) => (
              <CarInfo
                id={car.id}
                image={car.image}
                make={car.make}
                model={car.model}
                mpg={car.mpg}
                price={car.price}
                seats={car.seats}
                year={car.year} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}