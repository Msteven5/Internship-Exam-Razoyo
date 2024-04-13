import React from "react";
import { useEffect, useState } from "react";
import CarInfo from "./components/carInfo";

export default function Home() {

  const [carData, setCars] = useState([]);
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    getAllCars();
    getMakes();
  }, []);

  const getMakes = () => {
    let carsURL = `https://exam.razoyo.com/api/cars`;
    fetch(carsURL)
      .then((res) => res.json())
      .then((response) => setMakes(response.makes));
  };
  // Helper function that preforms an API request and sets the `issues` array to a list of issues from GitHub
  const getAllCars = () => {
    let carsURL = `https://exam.razoyo.com/api/cars`;
    fetch(carsURL)
      .then((res) => res.json())
      .then((response) => setCars(response.cars));
  };

  const filterCars = (make) => {
    let carURL = `https://exam.razoyo.com/api/cars?make=${make}`;
    fetch(carURL)
      .then((res) => res.json())
      .then((response) => setCars(response.cars));
  };

  console.log(carData)

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
      <div className="d-flex justify-content-center align-items-center vh-100 container-fluid">
        <div className="row">

          <h4 className="text-end text-white mt-5">
            <span className="bg-dark p-2 me-2 rounded-3">Filter by make:</span>
            <select className="rounded-3 p-2 text-center" onChange={handleCarFilter}>
              <option className="text-center" value="">All</option>
              {makes.map((make, index) => <option className="text-center" key={index}>{make}</option>)}
            </select>
          </h4>

          <div id="accordion mt-5 vw-100">
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