import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Whitepaper() {

    return (
      <div>
        <Head>
            <title>Pixieland | Whitepaper</title>
            <meta name="Pixieland" content="" />
        <link rel="icon" href='/Butterfly.jpg' />
        </Head>
        <div>
          <main className={styles.main3}>
            <h1 className={styles.title} style={{paddingTop:"20px"}}>Whitepaper</h1>
            <p style={{textAlign:"left"}}>Whitepaper text</p>
          </main>
        </div>  
      </div>
    
    )
  }