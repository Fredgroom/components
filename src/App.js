import React from "react";
import "./App.scss";
import SimInput from "./components/SimInput";
import SimSelect from "./components/SimSelect";
import SimPicRadio from './components/SimPicRadio';


function App() {
  return (
    <div className="App">
      <SimInput />
      <SimSelect names={["a", "b", "c", "d"]}>
        Select Something
      </SimSelect>
      <SimPicRadio 
        names={[
          'limited Company', 
          'Sole Trader', 
          'Ordinary Partnership', 
          'Limited Liability Partnership', 
          'Other']} 
        images={[
          'https://picsum.photos/100', 
          'https://picsum.photos/100', 
          'https://picsum.photos/100', 
          'https://picsum.photos/100', 
          'https://picsum.photos/100' ]}/>
    </div>
  );
}

export default App;
