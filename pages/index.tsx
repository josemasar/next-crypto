import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { GetStaticProps } from 'next'
import TableCoins from '../components/TableCoins'


const Home: NextPage = ( {coins} ) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
           Welcome to Crypto Type
        </h1>
      
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
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const coins = await res.json()

  return {
    props: { coins, 
    },
  }
}
