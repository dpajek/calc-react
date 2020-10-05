import React from "react";
import "./operatorbutton.css";

function OperatorButton(props) {
  const { operator, onClick } = props;

  const symbol = (() => {
    switch (operator) {
      case "multiply":
        return "\u00D7";
      case "divide":
        return "\u00F7";
      case "add":
        return "+";
      case "subtract":
        return "-";
      case "equals":
        return "=";
      default:
        return "?";
    }
  })();

  return (
    <button className="OperatorButton" onClick={() => onClick(operator)}>
      {symbol}
    </button>
  );
}

export default OperatorButton;
