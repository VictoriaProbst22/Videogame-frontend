import React from "react";
import { Chart } from "react-google-charts";

export const data = [
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
  export const options = {
    title: "North American Sales",
  };
const DisplayGenreByRegion = ({videoGames}) => {

    



    return ( <div>
        <h2> The Most Popular Genre by Region: </h2>
       <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    
    </div> );
}
 
export default DisplayGenreByRegion;