import { cohortName } from "./components/AllPlayers";
export async function deletePuppy(id) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
