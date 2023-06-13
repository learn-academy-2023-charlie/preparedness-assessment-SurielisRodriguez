import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("name:", name);
  };

  return (
    <div className="entire-content">
      <h1 className='header'>Preparedness Assessment</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <Label htmlFor="name">Enter your name</Label>
          <Input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div className="buttons">
          <ModalComponent name={name} />
          <Button className="btn" onClick={() => setName("")}>
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default App;

