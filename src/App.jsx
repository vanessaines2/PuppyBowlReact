import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import NewPlayerForm from "./components/NewPlayerForm";
import AllPlayers from "./components/AllPlayers";
import FetchSinglePup from "./components/SinglePuppy";
import SinglePuppy from "./components/SinglePuppy";

//url = https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="playerForm">Add Dog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/playerForm" element={<NewPlayerForm />} />
        <Route path="/:dogId" element={<SinglePuppy />} />
      </Routes>
      {/* <AllPlayers /> */}
    </div>
  );
}

export default App;
