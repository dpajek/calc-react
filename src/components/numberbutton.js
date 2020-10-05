import React from "react";
import "./numberbutton.css";

function NumberButton(props) {

    const {number,onClick} = props;

    return (
      <button className="NumberButton" onClick={()=>onClick(number)}>
        {number}
      </button>
    );
  }
  
  export default NumberButton;
  