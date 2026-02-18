import React from "react";
import "./styles.css";
import { v4 } from "uuid";

type Car = {
  brand: string;
  price: number;
  isDiesel: boolean;
};

const cars = [ { brand: "BMW", price: 20000, isDiesel: true }, 
    { brand: "Mercedes", price: 22000, isDiesel: false }, 
    { brand: "Porshe", price: 50000, isDiesel: true }, 
    { brand: "Nissan", price: 25000, isDiesel: false },
     { brand: "Audi", price: 50000, isDiesel: true } ];

     function Homework_06() {
   
  const CarCard = () => {
     
     return  cars.map((car) => ( 
        <div key={v4()} className="card">
        <h3>{car.brand}</h3>
        <p>Price: {car.price} € </p>
        <p>{car.isDiesel ? "Diesel" : "Petrol"}</p>
      </div>
    )  )
  }
  return <div className="container">{CarCard()}</div>; 
}

export default Homework_06;