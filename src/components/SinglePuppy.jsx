import { useEffect, useState } from "react";
import { cohortName } from "./AllPlayers";
import { useParams } from "react-router-dom";

function SinglePuppy() {
  const { dogId } = useParams();
  const [singlePup, setSinglePup] = useState({});
  useEffect(() => {
    async function getDog() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${dogId}`
        );
        const { data } = await response.json();
        const { player } = data;
        setSinglePup(player);
        console.log(player);
      } catch (error) {
        console.error;
      }
    }
    getDog();
  }, []);
  return (
    <span>
      <h1>{singlePup.name}</h1>
      <h2>{singlePup.id}</h2>
      <img
        style={{ height: "200px", margin: "5px" }}
        src={singlePup.imageUrl}
        alt=""
      ></img>
      <p>{singlePup.breed}</p>
      <p>{singlePup.status}</p>
    </span>
  );
}

export default SinglePuppy;
