import Head from 'next/head'
import styles from '../styles/game.module.css'
import { useEffect } from 'react'

export default function Game() {

  const delay = ms => new Promise(res => setTimeout(res, ms))

  const underContruction = async () => {
    for (var x=0; x<1; x++) {
      document.getElementById("mainText").innerText = "Under Contruction"
      await delay(500)
      document.getElementById("mainText").innerText = "Under Contruction."
      await delay(500)
      document.getElementById("mainText").innerText = "Under Contruction.."
      await delay(500)
      document.getElementById("mainText").innerText = "Under Contruction..."
      await delay(500)
      underContruction()
    }
  }

  useEffect(() => {
    underContruction()
  }, [])

    return (
      <div>
        <Head>
            <title>Pixieland | Game</title>
            <meta name="Pixieland" content="" />
        <link rel="icon" href='/Butterfly.jpg' />
        </Head>
        <div>
      <main className={`${styles.main}`}>
        <div id="mainText" className={styles.underContruction}>
          Under Contruction...
        </div>
      </main>
      </div>  
      </div>
    )
  }