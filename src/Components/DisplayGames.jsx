const DisplayGames = (props) => {

    console.log(props.parentGames)

    return ( <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Publisher</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Platform</th>
            </tr>
        </thead>
        <tbody>
            {props.parentGames.map((item, index)=>{
                return(
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.publisher}</td>
                        <td>{item.genre}</td>
                        <td>{item.year}</td>
                        <td>{item.platform}</td>
                    </tr>
                )
            })}
        </tbody>
    </table> );
}
 
export default DisplayGames;