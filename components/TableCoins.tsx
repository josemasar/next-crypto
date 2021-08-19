import Image from 'next/image'

interface CoinType {
    [key: string]: any
  }


const TableCoins = ( { coins } : CoinType ) => {  

    return(
        <div className="max-w-5xl mx-auto flex flex-row justify-center sm:rounded-lg">
            <table className="table-auto min-w-full border-2 border-gray-200">
                <thead className="bg-blue-200 bg-opacity-50">
                <tr>
                    <th className="px-6 py-3 text-xl text-center tracking-wider">Name</th>
                    <th className="px-6 py-3 text-xl text-center tracking-wider">Symbol</th>
                    <th className="px-6 py-3 text-xl text-center tracking-wider">Image</th>
                    <th className="px-6 py-3 text-xl text-center tracking-wider">Current price</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                {coins.map( (coin: any, index: number) => (
                    <tr key={index} className="hover:bg-indigo-100">
                        <td className="text-center font-semibold py-4">{coin.name}</td>
                        <td className="text-center text-gray-500">{coin.symbol}</td>
                        <td className="text-center"><Image src={coin.image} alt={coin.name} width={32} height={32} /></td>
                        <td className="text-center">{coin.current_price}</td>
                    </tr>
                ))} 
                </tbody>
            </table>
        </div>
    )
}

export default TableCoins

