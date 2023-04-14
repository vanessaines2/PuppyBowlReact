import { useEffect, useState } from "react";
import { cohortName } from "./AllPlayers";
import { useParams } from "react-router-dom";

function SinglePuppy() {
  const { dogId } = useParams();
  const [singlePup, setSinglePup] = useState(null);
  useEffect(() => {
    async function getDog() {
      try {
        const response = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/${dogId}`
        );
        const { data } = await response.json();
        const { player } = data;
        setSinglePup(player);
        console.log(player.id);
      } catch (error) {
        console.error;
      }
    }
    getDog();
  }, []);
  return (
    <span>
      <p>{puppy.breed}</p>
      <p>{puppy.status}</p>
    </span>
  );
}

export default SinglePuppy;
