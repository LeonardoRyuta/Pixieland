import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/mint.module.css'
import button from '../styles/button.module.css'
import { useWeb3React } from "@web3-react/core"
import useContract from '../web3/useContract'
import abi from "../web3/houses.json";
export default function Mint() {

    const { account } = useWeb3React();
    const contract = useContract("0xc6D4a3795B2877f9a57907A05e6ee8E41aFd3dB1", abi)

    const mint = async () => {
      console.log(account)
      console.log(contract)
    }

    return (
      <div>
        <div className={styles.container}>
            <Head>
                <title>PixieLand | Mint</title>
                <meta name="description" content="PixieLand - Mint your own House!" />
                <link rel="icon" href="/logo512.png" />
            </Head>
            <h1 className={styles.title}>
              Mint
            </h1>
            <main className={styles.main}>
                <div className={`${styles.grid}`} data-aos='fade-up'>
                    <div className={styles.card}>
                      <Image src='/firesnowhouse.gif' width={400} height={400}></Image>
                    </div>
                    <div className={styles.card}>
                        <button
                          className={button.pixel2}
                          onClick={mint}  
                        >
                            MINT 1 House
                        </button>
                    </div>
                </div>
            </main>
        </div>
      </div>
    )
  }