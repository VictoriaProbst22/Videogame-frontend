import React from "react";
import { Chart } from "react-google-charts";


  export const options = {
    title: "Japan Sales",
  };
const DisplayGenreBySecondRegion = ({videoGames}) => {
    
         //Map NorthAmericanSales
         let filteredSales = videoGames.map(game =>{
            return game.japansales
         });
         console.log('Japan Sales :', filteredSales)
   

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

            let japanGenreSales = videoGames.filter(game => game.genre === genre).map(game=>game.japansales).reduce((a,b) => a + b,0);
            console.log("NorthAmerican Genre Sales: ", japanGenreSales);
            

            // let totalAmericanSales = northAmericanGenreSales.map(game =>{
            //   return  [game.genre, game.northamericasale.reduce((total, num)=> total + num, 0)]})
                
            // console.log("Total American Sales: ", totalAmericanSales) 
                
        
            return [genre, japanGenreSales]
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
 
export default DisplayGenreBySecondRegion;



