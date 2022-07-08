import { Chart } from "react-google-charts";

const DisplayPlatformStats = ({videoGames}) => {

    console.log(videoGames)

    //Filter Video Games By Year
    let filteredGames = videoGames.filter(game => game.year >= 2013);
    console.log("Filtered Games: ", filteredGames)

    //Filter Video Games By Platforms
    let platforms = filteredGames.map(game =>{
        return game.platform
    });
    console.log('Filtered Platforms: ', platforms)

    //Removing duplicate Platforms
   let distinctPlatform = [...new Set(platforms)] 
   console.log('Distinct Platforms: ', distinctPlatform)

    //Mapping through to give each Platform a Column On Chart
    let platformArrays = distinctPlatform.map(platform =>{
        return [platform, 10, "silver"]
    });
    console.log('Platform Arrays: ', platformArrays)

  
    function generateDataFormChart(){
        const data = [
         ["Platform", "Sales", { role: "style" }],
         ...platformArrays
    ];
    console.log('Data: ', data)




    return data;
    }

    return ( <div>
        <h1>Video Game Consoles Sold Globally in Millions</h1>
        <Chart chartType="ColumnChart" width="100%" height="400px" data={generateDataFormChart()} />
    </div> );
}
 
export default DisplayPlatformStats;