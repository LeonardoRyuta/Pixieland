import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const houses = ['420', '421', '1424', '1581', '1824', '3824', '420', '421', '1424', '1581', '1824', '3824']

  return (
    <div>
      <Head> 
        <title>Pixieland | Home</title>
        <meta name="Pixieland" />
        <link rel="icon" href='/Butterfly.jpg' />
      </Head>
      <main className={styles.main}>
        <div className={styles.parent}>
          <div className={styles.fade}></div>
          <img src='/clouds.png' className={styles.clouds}/>
          <img src='/pixieland.png' className={styles.logo}/>
        </div>
      </main>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div>
           {/* Place video here (We can change the text next to it later) */}
          </div>
          <div className={styles.card}>
            <h1 className={styles.subtitle}>
              Phase 1
            </h1>
            <p> 
              10000 Pixiehouses sale. After phase 1 Pixieland houses will allow
              owners to display their NFTs and create their own space using our 
              developer kit.
            </p>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h1 className={styles.subtitle}>
              Phase 1
            </h1>
            <p> 
              Pixieland's first land sale will take place in Genesis city - 
              the core of our metaverse. Users who own land will be able to 
              place their pixie house and access the land editior where they 
              can fully customize their land and use the developer kit. 
              A token will also be made which will be used in the upcoming game.
            </p>
          </div>
          <div className={styles.pixelated}>
            <Image className={styles.pixelated} src='/city.png' width={500} height={500}></Image>
          </div>
        </div>
      </main>
    </div>
  )
}


