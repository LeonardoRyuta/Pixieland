import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const houses = ['420', '421', '1424', '1581', '1824', '3824', '420', '421', '1424', '1581', '1824', '3824']

  const tabs = [
    ['Radioactive', '0.1', '#7fff00'], 
    ['Ruby', '0.5', '#a90329'], 
    ['Emerald', '1', '#219a21'],
    ['Sapphire', '2', '#2581d0'],
    ['Gold', '3', '#f8b708'],
    ['Silver', '4', '#c4c6d0'], 
    ['Copper', '5', '#ea6a3d']
  ]

  const [currentTab, setTab] = useState(tabs[0])
  
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
      <main >
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
          <div className={`${styles.card} ${styles.right}`}>
            <p> 
              Pixieland's first land sale will take place in Genesis city - 
              the core of our metaverse. Users who own land will be able to 
              place their pixie house and access the land editior where they 
              can fully customize their land and use the developer kit. 
              A token will also be made which will be used in the upcoming game.
            </p>
          </div>
          <div className={`${styles.pixelated} ${styles.city}`}>
            <Image src='/city.png' width={500} height={500}></Image>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.right}`}>
            <h1 className={styles.subtitle}>
              Rarities
            </h1>
            <div>
              {tabs.map((tab, index) => (
                <span key={index} className={styles.tab}>
                  {currentTab[0] === tab[0] ?
                    <button style={{color: tab[2]}} className={styles.enabled} onClick={() => {setTab(tab)}}>{tab[0]}</button>
                  :
                    <button style={{color: tab[2]}} className={styles.disabled} onClick={() => {setTab(tab)}}>{tab[0]}</button>
                  }
                </span>
              ))}
            </div>
            <div style={{ marginBlock: '1rem'}}>
              <div>
                {currentTab[1]}%
              </div>
              <div className={styles.bar}>
                <span style={{width: `${parseFloat(currentTab[1])*10}%`, backgroundColor: currentTab[2]}}></span>
              </div>
            </div>
          </div>
          <div className={`${styles.pixelated} ${styles.city}`}>
            <Image src={`/1of1s/${currentTab[0].toLowerCase()}.gif`} width={400} height={400}></Image>
          </div>
        </div>
      </main>
    </div>
  )
}


