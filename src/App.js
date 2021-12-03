import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">React CALC</h1>
      <div className="calc">
        <div className="operations">Operations: </div>
        <div className="numbers">
          <input className="field" type="number" placeholder="first"/>
          <span></span>
          <input className="field" type="number" placeholder="second"/>
        </div>
        <div className="actions">
          <button className="btn">+</button>
          <button className="btn">-</button>
          <button className="btn">*</button>
          <button className="btn">/</button>
        </div>
        <div className="footer">
          <button className="btn btn--danger">reset</button>
          <div className="result">Result:</div>
        </div>
      </div>
    </div>
  );
}

export default App;
