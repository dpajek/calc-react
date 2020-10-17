import React from "react";
import "./clearbutton.css";

function ClearButton(props) {
  const { onClick } = props;
  return (
    <button className="ClearButton" onClick={onClick}>
      clear
    </button>
  );
}

export default ClearButton;
