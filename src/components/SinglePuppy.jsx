import { useEffect, useState } from "react";
import { cohortName } from "./AllPlayers";

function SinglePup() {
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
  return <h2>{singlePup.name}</h2>;
}

export default SinglePup;
