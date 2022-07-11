import React from "react";
import { Chart } from "react-google-charts";


  export const options = {
    title: "North American Sales",
  };
const DisplayGenreByRegion = ({videoGames}) => {
    console.log(videoGames)
    function generateGenres(){
        const data = [
            ["Genre", "Sales by Millions"],
            ["Adventure", 8],
            ["Action", 8],
            ["Fighting", 8],
            ["Misc", 8],
            ["Platform", 8],
            ["Racing", 8],
            ["Role Playing", 8],
            ["Shooter", 8],
            ["Simulation", 8],
            ["Sports", 8],
            ["Stragey", 8],
          ];
          return data;
    }

        //Filter By Genre
        let filteredGenre = videoGames.map(game => {
            return game.genre
        });
        console.log("Filtered Genre: ", filteredGenre)

        //Removing Duplicates
        let distinctGenres = [...new Set (filteredGenre)]
        console.log("Distinct Genre: ", distinctGenres)


        //FilteredGenre by Region






    return ( <div>
        <h2> The Most Popular Genre by Region: </h2>
       <Chart
      chartType="PieChart"
      data={generateGenres()}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div> );
}
 
export default DisplayGenreByRegion;