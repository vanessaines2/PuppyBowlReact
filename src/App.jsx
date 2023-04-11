import { useState, useEffect } from "react";
import "./App.css";
//url = https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players
const cohortName = "2301-FTB-ET-WEB-AM";
function App() {
  const [puppyData, setPuppyData] = useState([]);
  useEffect(() => {
    async function fetchAllPups() {
      console.log("trying to fetch data");
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`
      );
    }
  });
  return (
    <div className="App">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Breed:
          <input type="text" name="breed" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>All Puppies</h1>
    </div>
  );
}

export default App;
