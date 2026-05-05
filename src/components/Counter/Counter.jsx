import { useState } from "react";

function Counter({ value, setValue }) {
  function plusButton(fruit, setFruit) {
    setValue(value + 1);
  }

  function minusButton(fruit, setFruit) {
    if (value > 0) {
      setValue(value - 1);
    }
  }

  return (
    <>
      <button onClick={() => minusButton(value, setValue)}>-</button>
      <div className="fruitmand__item_aantal">{value}</div>
      <button onClick={() => plusButton(value, setValue)}>+</button>
    </>
  );
}

export default Counter;
