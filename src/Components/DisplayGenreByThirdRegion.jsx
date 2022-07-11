import React from "react";
import { Chart } from "react-google-charts";


  export const options = {
    title: "Europe Sales",
  };
const DisplayGenreByThirdRegion = ({videoGames}) => {
    
         //Map NorthAmericanSales
         let filteredSales = videoGames.map(game =>{
            return game.europesales
         });
         console.log('Europe Sales :', filteredSales)
   

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

            let europeGenreSales = videoGames.filter(game => game.genre === genre).map(game=>game.europesales).reduce((a,b) => a + b,0);
            console.log("Europe Genre Sales: ", europeGenreSales);
            

            // let totalAmericanSales = northAmericanGenreSales.map(game =>{
            //   return  [game.genre, game.northamericasale.reduce((total, num)=> total + num, 0)]})
                
            // console.log("Total American Sales: ", totalAmericanSales) 
                
        
            return [genre, europeGenreSales]
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
       <Chart
      chartType="PieChart"
      data={generateGenres()}
      options={options}
      width={"100%"}
      height={"400px"}
    />

    
    </div> );
}
 
export default DisplayGenreByThirdRegion;