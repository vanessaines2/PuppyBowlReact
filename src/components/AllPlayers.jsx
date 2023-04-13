import App from "../App";
import { useState, useEffect } from "react";
import "../App.css";
import NewPlayerForm from "./NewPlayerForm";

export const cohortName = "2301-FTB-ET-WEB-AM";

function FetchAllPlayers() {
  // useState = empty array???
  const [puppyData, setPuppyData] = useState([]);
  useEffect(() => {
    async function fetchAllPups() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`
        );
        // const result = await response.json();
        //data: {players: []}
        const { data } = await response.json();
        const { players } = data;
        setPuppyData(players);
        console.log(players);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllPups();
  }, []);
  return (
    <div className="App">
      <NewPlayerForm setPuppyData={setPuppyData} />
      <h1>All Puppies </h1>
      {puppyData.map((puppy) => {
        return (
          <span className="puppyLayout" key={puppy.id}>
            <h2>{puppy.name}</h2>
            <h3>#{puppy.id}</h3>
            <span>
              <img src={puppy.imageUrl} alt="puppyPic"></img>
            </span>
            <button onClick={() => {}}>See Doggy Details</button>
            <button>Delete Puppy</button>
            <span>
              <p>{puppy.breed}</p>
              <p>{puppy.status}</p>
            </span>
            <div></div>
          </span>
        );
      })}
    </div>
  );
}

export default FetchAllPlayers;
