import React, { useState } from "react";

const Calculator: React.FC = () => {
  const [input1, setInput1] = useState<number | "">("");
  const [input2, setInput2] = useState<number | "">("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculation = (operation: string) => {
    if (input1 !== "" && input2 !== "") {
      const num1 = Number(input1);
      const num2 = Number(input2);
      let res = null;

      switch (operation) {
        case "+":
          res = num1 + num2;
          break;
        case "-":
          res = num1 - num2;
          break;
        case "*":
          res = num1 * num2;
          break;
        case "/":
          res = num2 !== 0 ? num1 / num2 : null;
          break;
        default:
          break;
      }
      setResult(res);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Calculator</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="number"
          value={input1}
          onChange={(e) =>
            setInput1(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Enter first number"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="number"
          value={input2}
          onChange={(e) =>
            setInput2(e.target.value === "" ? "" : Number(e.target.value))
          }
          placeholder="Enter second number"
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <button
          onClick={() => handleCalculation("+")}
          style={{ flex: 1, margin: "0 5px" }}
        >
          +
        </button>
        <button
          onClick={() => handleCalculation("-")}
          style={{ flex: 1, margin: "0 5px" }}
        >
          -
        </button>
        <button
          onClick={() => handleCalculation("*")}
          style={{ flex: 1, margin: "0 5px" }}
        >
          *
        </button>
        <button
          onClick={() => handleCalculation("/")}
          style={{ flex: 1, margin: "0 5px" }}
        >
          /
        </button>
      </div>
      <div>
        <h3>Result: {result !== null ? result : "N/A"}</h3>
      </div>
    </div>
  );
};

export default Calculator;
