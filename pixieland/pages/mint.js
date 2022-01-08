import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/mint.module.css'
import button from '../styles/button.module.css'

export default function Mint() {

    const mint = () => {
      console.log('minting...');
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