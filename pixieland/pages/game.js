import Head from 'next/head'
import styles from '../styles/game.module.css'

export default function Game() {

    return (
      <div>
        <Head>
            <title>Pixieland | Game</title>
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