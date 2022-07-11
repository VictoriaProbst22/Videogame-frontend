import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import DisplayGames from "./Components/DisplayGames";
import DisplayPlatformStats from "./Components/DisplayPlatformStats";
import DisplayGenreByRegion from "./Components/DisplayGenreByRegion";
import DisplayGenreBySecondRegion from "./Components/DisplayGenresBySecondRegion";
import DisplayGenreByThirdRegion from "./Components/DisplayGenreByThirdRegion";


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
      <DisplayPlatformStats videoGames={games}/>
      <DisplayGenreByRegion videoGames={games} />
      <DisplayGenreBySecondRegion videoGames={games}/>
      <DisplayGenreByThirdRegion videoGames={games}/>
      <DisplayGames parentGames={filteredGames}/>
    </div>
  );
}

export default App;
