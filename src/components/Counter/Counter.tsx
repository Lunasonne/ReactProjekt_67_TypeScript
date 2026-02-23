// ШАГ 1: Импортируем функцию хук useState из библиотеки react
import { useState } from "react";
import Button from "components/Button/Button";
import { type CounterProps } from "./types";
import "./styles.css";


function Counter({count, onMinus, onPlus}: CounterProps) {
   return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
