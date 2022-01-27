import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head> 
        <title>Pixieland | Home</title>
        <meta name="Pixieland" content="" />
        <link rel="icon" href='/Butterfly.jpg' />
      </Head>


      <div onScroll={()=>{console.log("scrolled")}}>
     
      <main className={styles.main} id="main">
        <h1 className={styles.title}>
        <p style={{fontFamily:"ChronoType"}}>Pixieland</p>
        </h1>
        {/* <h2 className={styles.head } >
          <div className={styles.playbutton}><a href="/game">PLAY</a></div>
        </h2> */}
        <svg onClick={()=>{scroll(0, (document.getElementById("info").offsetTop + 10))}} xmlns="http://www.w3.org/2000/svg" className={`${styles.arrowdown}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </main>
      </div>

      <div className={styles.scrollingimgs}>
        <img src='/420.gif' className={styles.scrollimg}/>
        <img src='/421.gif' className={styles.scrollimg}/>
        <img src='/1424.gif' className={styles.scrollimg}/>
        <img src='/1581.gif' className={styles.scrollimg}/>
        <img src='/1824.gif' className={styles.scrollimg}/>
        <img src='/3824.gif' className={styles.scrollimg}/>
        <img src='/420.gif' className={styles.scrollimg}/>
        <img src='/421.gif' className={styles.scrollimg}/>
        <img src='/1424.gif' className={styles.scrollimg}/>
        <img src='/1581.gif' className={styles.scrollimg}/>
        <img src='/1824.gif' className={styles.scrollimg}/>
        <img src='/3824.gif' className={styles.scrollimg}/>
      </div>

    <div style={{backgroundColor:"bisque"}} id="info">

      <div className={styles.other} id="div1">
        <div>
        <div className={styles.gridimage}>
          <Image src='/firesnowhouse.gif' width={400} height={400} className="rounded" style={{borderRadius: "20px", boxShadow:"-4px -3px 45px 21px rgba(0,0,0,0.35)"}}/>
          </div>  
        </div>
        <div>  
          <div className={styles.griditem}  style={{textAlign:"left"}}>
            <h1 style={{borderBottom:"2px solid black"}}>
              Phase 1
            </h1>
            <p style={{fontFamily:"ChronoType"}}> 
            10000 Pixiehouses sale. After phase 1 Pixieland houses will allow owners to display their NFTs and create their own space using our developer kit.
            </p>
          </div>  
        </div>
      </div>
      

    
      <div className={styles.other} style={{}}>
        <div style={{}}>
          <div className={styles.griditem} style={{textAlign:"right"}}>
            <h1 style={{borderBottom:"2px solid black"}}>
              Phase 2
            </h1>
            <p>
            <div style={{fontFamily:"ChronoType"}}>
            Pixieland&apos;s first land sale will take place in Genisis city - the core of our metaverse. Users who own land will be able to place their pixie house and access the land editior where they can fully customize their land and use the developer kit.
            </div>
            </p>
          </div>
        </div>
        <div>  
          <div  style={{}} className={styles.gridimage}>
          <Image src='/abandoned.gif' width={400} height={400} className="rounded" style={{borderRadius: "20px", boxShadow:"-4px -3px 45px 21px rgba(0,0,0,0.35)"}}/>
          </div>  
        </div>
        </div>

        <div className={styles.rarityPart}>
          <h1 className={styles.rarityTitle}>Pixiehouse Rarity</h1>
          <div className={styles.rarityContent}>
            
            <div className={styles.rareImgs}>

            </div>

            <div className={styles.rarity}>

              <div className={styles.filler}>
                Percentage Chance
              </div>

              <div className={styles.rareTitles}>Radioactive: 0.1% </div> 
              <div className={styles.rad}/>

              <div className={styles.rareTitles}>Ruby: 0.5% </div>
              <div className={styles.ruby}/>

              <div className={styles.rareTitles}>Emerald: 1% </div>
              <div className={styles.emerald}/>

              <div className={styles.rareTitles}>Sapphire: 2%</div>
              <div className={styles.sapphire}/>

              <div className={styles.rareTitles}>Gold: 3% </div>
              <div className={styles.gold}/>

              <div className={styles.rareTitles}>Silver: 4% </div>
              <div className={styles.silver}/>

              <div className={styles.rareTitles}>Copper: 5% </div>
              <div className={styles.copper}/>
              
            </div>

            {/* <div>
              This shows the percentage chance of getting a trait on your house.
            </div> */}

          </div>
        </div>

        </div>
    </div>
  )
}


