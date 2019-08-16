import React from "react";
import "./App.scss";
import SimInput from "./components/SimInput";
import SimSelect from "./components/SimSelect";

function App() {
  return (
    <div className="App">
      <SimInput />
      <SimSelect names={["a", "b", "c", "d"]}>
        Select Something, Jeez!
      </SimSelect>
    </div>
  );
}

export default App;
