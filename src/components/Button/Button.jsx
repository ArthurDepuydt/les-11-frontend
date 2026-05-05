import "./Button.css";

import { useState } from "react";

function Button({ onClick, type, value }) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {value}
    </button>
  );
}

export default Button;
