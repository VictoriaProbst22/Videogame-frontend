import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import DisplayGames from "./Components/DisplayGames";


function App() {

  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState([])

useEffect(()=>{
  getGameData();
}, [])


const getGameData = async() => {
  try {
    let response = await axios.get("http://localhost:8080/all");
    setGames(response.data)
    console.log(response.data)
    
  } catch (error) {
    console.log(error)
    
  }
}

const filterGames = (searchTerm) =>{

  let results = games.filter(
    function(game){
      if(game.name.includes(searchTerm)) {
        return true;
      }
      else(
        console.log("Error")
      )
    });
    console.log(results);
    setFilteredGames(results);
}




  return (
    <div>
      <SearchBar searchGameProp={filterGames}/>
      <DisplayGames parentGames={filteredGames}/>
    </div>
  );
}

export default App;
