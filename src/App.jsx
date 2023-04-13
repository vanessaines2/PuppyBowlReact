import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from "./components/AllPlayers";
import FetchSinglePup from "./components/SinglePuppy";

//url = https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players

function App() {
  return (
    <div className="App">
      <AllPlayers />
    </div>
  );
}

export default App;
