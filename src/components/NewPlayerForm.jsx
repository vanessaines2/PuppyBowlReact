import App from "../App";
import { useState } from "react";
import { cohortName } from "./AllPlayers";

function NewPlayerForm({ setPuppyData }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        // const formData = new FormData(event.target);
        // const values = Object.fromEntries(formData.entries());
        try {
          const response = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                breed,
              }),
            }
          );
          const response2 = await fetch(
            `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`
          );
          // const result = await response.json();
          //data: {players: []}
          const { data } = await response2.json();
          const { players } = data;
          setPuppyData(players);
        } catch (error) {}
      }}
    >
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value), console.log(event.target.value);
          }}
        />
        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          value={breed}
          onChange={(event) => {
            setBreed(event.target.value), console.log(event.target.value);
          }}
        />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPlayerForm;
