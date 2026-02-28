import { useState } from "react";

/* 1. Display Current Date */
function DisplayDate() {
  return <h2>{new Date().toDateString()}</h2>;
}

/* 2. Counter App (Increment) */
function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

/* 3. Decrement Counter */
function DecrementCounter() {
  const [num, setNum] = useState(10);

  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => setNum(num - 1)}>Decrease</button>
    </>
  );
}

/* 4. Show / Hide Text */
function ShowHideText() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p>Hello React</p>}
    </>
  );
}

/* 5. Input Display */
function InputDisplay() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <h2>{name}</h2>
    </>
  );
}

/* Main App Menu */
function App() {
  const [program, setProgram] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React Programs Menu</h1>

      <button onClick={() => setProgram("date")}>Current Date</button>
      <button onClick={() => setProgram("counter")}>Counter App</button>
      <button onClick={() => setProgram("decrement")}>
        Decrement Counter
      </button>
      <button onClick={() => setProgram("toggle")}>
        Show / Hide Text
      </button>
      <button onClick={() => setProgram("input")}>
        Input Display
      </button>

      <hr />

      {program === "date" && <DisplayDate />}
      {program === "counter" && <CounterApp />}
      {program === "decrement" && <DecrementCounter />}
      {program === "toggle" && <ShowHideText />}
      {program === "input" && <InputDisplay />}
    </div>
  );
}

export default App;