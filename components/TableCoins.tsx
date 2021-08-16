

const TableCoins = ( coins ) => {

    return(
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Symbol</th>
                <th>Current price</th>
            </tr>
            </thead>
            <tbody>
             {coinsList.map( (coin, index) => (
                <tr key={index}>
                    <td>{coin}</td>
                </tr>
             ))} 
            </tbody>
        </table>
    )
}

export default TableCoins

