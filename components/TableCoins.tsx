import Image from 'next/image'

const TableCoins = ( {coins} ) => {

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
             {coins.map( (coin, index) => (
                <tr key={index}>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td><Image src={coin.image} alt={coin.name} width={20} height={20} /></td>
                    <td>{coin.current_price}</td>
                </tr>
             ))} 
            </tbody>
        </table>
    )
}

export default TableCoins

