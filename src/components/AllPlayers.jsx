import App from "../App";
import { useState, useEffect } from "react";
import "../App.css";
import NewPlayerForm from "./NewPlayerForm";
import { deletePuppy } from "../ajaxHelpers";
export const cohortName = "2301-FTB-ET-WEB-AM";
import SinglePuppy from "./SinglePuppy";

function AllPlayers() {
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
          <div className="puppyLayout" key={puppy.id}>
            <h2>{puppy.name}</h2>
            <h3>#{puppy.id}</h3>
            <div>
              <img
                style={{ height: "200px" }}
                src={puppy.imageUrl}
                alt=""
              ></img>
            </div>
            <div>
              <button onClick={() => {}}>See Doggy Details</button>
              <button
                onClick={async () => {
                  await deletePuppy(puppy.id);
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
                }}
              >
                Delete Puppy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllPlayers;
