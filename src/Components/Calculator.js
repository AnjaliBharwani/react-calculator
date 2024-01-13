import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const validInput = () => {
    if (num1 === "" ) {
      setError("Num1 cannot be empty");
      return false;
      
    }

        if (isNaN(num1)) {
          setError("Enter a Valid Number");
          return false;
        }
 
    
    if (num2 === "" ) {
      setError("Num2 cannot be empty");
      return false;
    }

        if (isNaN(num2)) {
          setError("Enter a Valid Number");
          return false;
        }
  
    setError(null);
    return true;
  };
  



  const add = () => {
    if (validInput()) {
      setResult(parseFloat(num1) + parseFloat(num2));
      setNum1("");
      setNum2("");
      
    }
  };

  const substract = () => {
    if (validInput()) {
      setResult(parseFloat(num1) - parseFloat(num2));
      setNum1("");
      setNum2("");
    }
  };

  const multiply = () => {
    if (validInput()) {
      setResult(parseFloat(num1) * parseFloat(num2));
      setNum1("");
      setNum2("");
    }
  };

  const divide = () => {
    if (num2 !== "0") {
      setResult(parseFloat(num1) / parseFloat(num2));
    } else {
      setError("Division by zero is not allowed.");
    }
    setNum1("");
      setNum2("");
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>React Calculator</h1>
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) =>{ setNum1(e.target.value)
            setResult(null);
        }}
          
        ></input>
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => {setNum2(e.target.value)
            setResult(null);
        }}
        ></input>

        <div className="buttons-div">
          <button onClick={add}>+</button>
          <button onClick={substract}>-</button>
          <button onClick={multiply}>*</button>
          <button onClick={divide}>/</button>
        </div>
     

      <div className="error">
        {error ? (
          <p className="red">
            Error!<p className="mess">{error}</p>
          </p>
        ) : result != null ? (
          <p className="blue">Success!</p>
        ) : null}
      </div>

      <div className="success">
        {result != null ? <p className="mess">Result:{result}</p> : null}
      </div>
    </div>
    </div>
  );
};

export default Calculator;
