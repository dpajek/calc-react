import React, { useState } from "react";
import "./App.css";

import CalculatorDisplay from "./components/calculatordisplay";
import CalculatorKeyPad from "./components/calculatorkeypad";

function App() {
  const [displayedValue, setDisplayedValue] = useState(0);
  const [activeOperator, setActiveOperator] = useState("equals");
  const [previousValue, setPreviousValue] = useState(0);
  const [justAnswered, setJustAnswered] = useState(false);


  return (
    <div className="App">
      <CalculatorDisplay
        displayedValue={displayedValue}
        previousValue={previousValue}
        activeOperator={activeOperator}
        justAnswered={justAnswered}
      />
      <CalculatorKeyPad
        displayedValue={displayedValue}
        setDisplayedValue={setDisplayedValue}
        previousValue={previousValue}
        setPreviousValue={setPreviousValue}
        activeOperator={activeOperator}
        setActiveOperator={setActiveOperator}
        justAnswered={justAnswered}
        setJustAnswered={setJustAnswered}
      />
    </div>
  );
}

export default App;
