import Head from 'next/head'
import styles from '../styles/game.module.css'

export default function Map() {

    return (
      <div>
        <Head>
            <title>Pixieland | Map </title>
            <meta name="Pixieland" content="" />
        <link rel="icon" href='/Butterfly.jpg' />
        </Head>
        <div>
      <main className={`${styles.main}`}>
        <div className={`${styles.comingsoon}`}>
          COMING SOON
        </div>
      </main>
      </div>  
      </div>
    )
  }