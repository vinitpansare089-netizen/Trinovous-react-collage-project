import { useState } from "react";

function DisplayDate() {
  return <h2>{new Date().toDateString()}</h2>;
}

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

function App() {
  const [program, setProgram] = useState("");

  return (
    <div>
      <h1>React Programs Menu</h1>

      <button onClick={() => setProgram("date")}>
        Current Date
      </button>

      <button onClick={() => setProgram("counter")}>
        Counter App
      </button>

      <hr />

      {program === "date" && <DisplayDate />}
      {program === "counter" && <CounterApp />}
    </div>
  );
}

export default App;