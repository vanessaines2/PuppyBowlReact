import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NewPlayerForm from "./components/NewPlayerForm";
import FetchAllPlayers from "./components/AllPlayers";

//url = https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FetchAllPlayers />
      </div>
    </BrowserRouter>
  );
}

export default App;
