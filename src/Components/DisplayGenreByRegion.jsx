import React from "react";
import { Chart } from "react-google-charts";


  export const options = {
    title: "North American Sales",
  };
const DisplayGenreByRegion = ({videoGames}) => {
    
         //Map NorthAmericanSales
         let filteredSales = videoGames.map(game =>{
            return game.northamericasales
         });
         console.log('North American Sales :', filteredSales)
   

        //Map Genre
        let filteredGenre = videoGames.map(game => {
            return game.genre
        });
       console.log('Filtered Genre: ', filteredGenre);

        //Removing Duplicates
        let distinctGenres = [...new Set (filteredGenre)]
        console.log("Distinct Genre: ", distinctGenres)


            
            



            //FilteredGenre by Region Sales
        let genreArrays= distinctGenres.map(genre =>{

            let northAmericanGenreSales = videoGames.filter(game => game.genre === genre).map(game=>game.northamericasales).reduce((a,b) => a + b,0);
            console.log("NorthAmerican Genre Sales: ", northAmericanGenreSales);
            

            // let totalAmericanSales = northAmericanGenreSales.map(game =>{
            //   return  [game.genre, game.northamericasale.reduce((total, num)=> total + num, 0)]})
                
            // console.log("Total American Sales: ", totalAmericanSales) 
                
        
            return [genre, northAmericanGenreSales]
        });
        console.log("Genre Arrays: ", genreArrays)
        
        
        



     function generateGenres(){
        const data = [
        ["Genre", "Sales by Millions"],
        ...genreArrays
        ];
          console.log("Data: ", data)
          return data;

    }
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



