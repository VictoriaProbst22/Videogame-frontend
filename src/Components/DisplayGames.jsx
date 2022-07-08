import { useState } from "react";

const DisplayGames = (props) => {
    console.log(props.parentGames);
    
    const[isShown, setIsShown] = useState(false);
    
    const handleClick = event => {
        setIsShown(current => !current);
    };

    
    return ( <div>
        <h2>Results</h2>
        <div>
            {props.parentGames.map((item, index)=>{
                return(
                    <div>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                       <button onClick={handleClick}> Click </button>
                       {isShown &&(
                        <ul>Publisher: {item.publisher}</ul>
                       )}

                        {isShown&&(
                            <ul>Year: {item.year}</ul>
                        )}
                        {isShown&&(
                            <ul>N. America Sales: {item.northamericasales}</ul>
                        )}
                        {isShown&&(
                            <ul>Europe Sales: {item.europesales}</ul>
                        )}
                        {isShown&&(
                            <ul>Japan Sales: {item.japansales}</ul>
                        )}
                        {isShown&&(
                            <ul>Other Sales: {item.othersales}</ul>
                        )}
                        {isShown&&(
                            <ul>Global Sales: {item.globalsales}</ul>
                        )}

                    </div>
                )
            })}
        </div>
    </div> );
}
 
export default DisplayGames;