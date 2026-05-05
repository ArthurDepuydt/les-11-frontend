import { useState } from "react";

function Input({ value, setValue, type, id, name, label }) {
  return (
    <>
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default Input;
