import { v4 } from "uuid";

import "./styles.css";
import { type Car } from "./types";

function Homework_06() {
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  const carCards = cars.map((car: Car) => {
    return (
      <div key={v4()} className="car_card">
        <p className="car_info">Brand: {car.brand}</p>
        <p className="car_info">Price: {car.price}</p>
        <p className="car_info">
          Is Diesel: {car.isDiesel ? "Diesel" : "Non-diesel"}
        </p>
      </div>
    );
  });

  return <div className="homework_06_wrapper">{carCards}</div>;
}

export default Homework_06;
