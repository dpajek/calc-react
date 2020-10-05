import React from "react";
import "./calculatordisplay.css";

function CalculatorDisplay(props) {
  const { displayedValue, previousValue, activeOperator, justAnswered } = props;

  const symbol = (() => {
    switch (activeOperator) {
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
    <div className="CalculatorDisplay">
      <div className="BreadCrumbs">
        {justAnswered || symbol === "=" ? "" : previousValue + " " + symbol}
      </div>
      <div className="Display">{displayedValue}</div>
    </div>
  );
}

export default CalculatorDisplay;
