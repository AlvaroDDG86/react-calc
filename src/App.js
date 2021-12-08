import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [operations, setOperations] = useState(0);
  const numA = useRef();
  const numB = useRef();
  function caculate(action) {
    const valA = parseInt(numA.current.value);
    const valB = parseInt(numB.current.value);
    if (!isNaN(valA) && !isNaN(valB)) {
      switch (action) {
        case "+":
          setResult(valA + valB);
          break;
        case "-":
          setResult(valA - valB);
          break;
        case "*":
          setResult(valA * valB);
          break;
        case "/":
          setResult(parseFloat(valA / valB).toFixed(2));
          break;
        default:
          console.log("Operation not supported");
      }
      setOperations((prev) => (prev += 1));
    } else {
      console.log("some empty value")
    }
  }
  function reset() {
    setResult(0);
    numA.current.value = "";
    numB.current.value = "";
    setOperations(0);
  }

  return (
    <div className="app">
      <h1 className="title">React CALC</h1>
      <div className="calc">
        <div className="operations">Operations: {operations}</div>
        <div className="numbers">
          <input
            className="field"
            ref={numA}
            type="number"
            placeholder="first"
          />
          <span></span>
          <input
            className="field"
            ref={numB}
            type="number"
            placeholder="second"
          />
        </div>
        <div className="actions">
          <button className="btn" onClick={() => caculate("+")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
            </svg>
          </button>
          <button className="btn" onClick={() => caculate("-")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 11h14v2H5z" />
            </svg>
          </button>
          <button className="btn" onClick={() => caculate("*")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          </button>
          <button className="btn" onClick={() => caculate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M5 11h14v2H5v-2zm7-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
        </div>
        <div className="footer">
          <button className="btn btn--danger" onClick={reset}>
            reset
          </button>
          {operations > 0 && <div className="result">Result: {result}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
