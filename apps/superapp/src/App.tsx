import React from "react";
import logo from "./logo.svg";
import Edxpert from "edxpert/App";
import MDM from "mdm/App";
import OPMS from "opms/App";
import { Button } from "ui/button";
function App() {
  return (
    <div className="App">
      <h1>I'm from SUPERAPP</h1>
      <Edxpert />
      <MDM />
      <OPMS />
      <Button />
    </div>
  );
}

export default App;
