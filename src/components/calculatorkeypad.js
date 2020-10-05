import React from "react";
import "./calculatorkeypad.css";

import NumberButton from "./numberbutton";
import OperatorButton from "./operatorbutton";
import ClearButton from "./clearbutton";

function CalculatorKeyPad(props) {
  const {
    previousValue,
    setPreviousValue,
    displayedValue,
    setDisplayedValue,
    activeOperator,
    setActiveOperator,
    justAnswered,
    setJustAnswered,
  } = props;

  function handleNumberClick(i) {
    if (justAnswered === true) {
      setPreviousValue(displayedValue);
      setDisplayedValue(i);
      setJustAnswered(false);
    } else {
      setDisplayedValue(parseInt("" + displayedValue + i));
    }
  }

  function handleOperatorClick(newOperator) {
    if (justAnswered !== true) {
      let answer;
      switch (activeOperator) {
        case "multiply":
          answer = previousValue * displayedValue;
          setJustAnswered(true);
          break;
        case "divide":
          answer = previousValue / displayedValue;
          setJustAnswered(true);
          break;
        case "add":
          answer = previousValue + displayedValue;
          setJustAnswered(true);
          break;
        case "subtract":
          answer = previousValue - displayedValue;
          setJustAnswered(true);
          break;
        case "equals":
          setPreviousValue(displayedValue);
          answer = 0;
          break;
        default:
          alert(newOperator);
      }

      setDisplayedValue(Math.round((answer + Number.EPSILON) * 100) / 100);
    } else {
      setPreviousValue(displayedValue);
      setDisplayedValue(0);
      setJustAnswered(false);
    }
    setActiveOperator(newOperator);
  }

  function handleClear() {
      setActiveOperator("equals");
    setPreviousValue(0);
    setDisplayedValue(0);
    setJustAnswered(false);
  }

  return (
    <div className="CalculatorKeyPad">
      <NumberButton number={7} onClick={(i) => handleNumberClick(i)} />
      <NumberButton number={8} onClick={(i) => handleNumberClick(i)} />
      <NumberButton number={9} onClick={(i) => handleNumberClick(i)} />
      <OperatorButton
        operator={"divide"}
        onClick={(operator) => handleOperatorClick(operator)}
      />

      <NumberButton number={4} onClick={(i) => handleNumberClick(i)} />
      <NumberButton number={5} onClick={(i) => handleNumberClick(i)} />
      <NumberButton number={6} onClick={(i) => handleNumberClick(i)} />
      <OperatorButton
        operator={"multiply"}
        onClick={(operator) => handleOperatorClick(operator)}
      />

      <NumberButton number={1} onClick={(i) => handleNumberClick(i)} />
      <NumberButton number={2} onClick={(i) => handleNumberClick(i)} />
      <NumberButton number={3} onClick={(i) => handleNumberClick(i)} />
      <OperatorButton
        operator={"add"}
        onClick={(operator) => handleOperatorClick(operator)}
      />

      <ClearButton onClick={handleClear}/>
      <NumberButton number={0} onClick={(i) => handleNumberClick(i)} />
      <OperatorButton
        operator={"equals"}
        onClick={(operator) => handleOperatorClick(operator)}
      />
      <OperatorButton
        operator={"subtract"}
        onClick={(operator) => handleOperatorClick(operator)}
      />
    </div>
  );
}

export default CalculatorKeyPad;
