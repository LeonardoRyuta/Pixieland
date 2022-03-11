import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import FAQ  from './FAQ'
import TeamDisplay from './teamDisplay'
import Roadmap from './roadMap'
import Mint from './mint'

export default function Home() {

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

  useEffect(() => {
    document.addEventListener('scroll', ()=>{
      inView();
    })
  }, [])

  const inView = () => {
    var counter;
    counter = document.getElementById('About');
    if (counter.getBoundingClientRect().top <= window.innerHeight) {
      document.getElementById("scrollUp").style.display = ""
    } else {
      document.getElementById("scrollUp").style.display = "none"
    }
  }

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Head> 
        <title>Pixieland | Home</title>
        <meta name="Pixieland" />
        <link rel="icon" href='/Butterfly.png' />
      </Head>
      <div className={styles.parent}>
        <div className={styles.flexcenter}>
          <div className={styles.fade}></div>
          <img className={styles.butterflyLogo} id="butterflyLogo" src='/Butterfly.png'></img>
        </div>
      </div>
      <main className={styles.main1}>
        <div style={{display:"none"}} id="scrollUp" className={styles.scrollUp} onClick={()=>{scrollUp()}}>
        </div>
        <div className={styles.parent}>
          <div className={styles.fade}></div>
          <img src='/clouds.png' className={styles.clouds}/>
          <img className={styles.logo}/>
        </div>
      </main>
      <main className={styles.centered}>
        <div className={styles.grid}>
            <div className={styles.previewSection}>
              <div className={styles.housesDisplay1}>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse1.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse2.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse3.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse4.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse5.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse6.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse7.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse8.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse9.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse10.gif"/>
              </div>
              <div className={styles.housesDisplay2}>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse11.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse12.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse13.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse14.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse15.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse16.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse17.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse18.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse19.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse20.gif"/>
              </div>
              <div className={styles.housesDisplay1}>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse21.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse22.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse23.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse24.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse25.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse26.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse27.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse28.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse29.gif"/>
                <img className={styles.houses} src="421.gif"/>
              </div>
            </div>
          <div id="About" className={`${styles.card} ${styles.right}`}>
            <p className={styles.paragraph}>
              Mint and create with
            </p>
            <h1 className={styles.subTitle}>
              Pixiehouses  
            </h1> 
            <p className={styles.paragraph}> 
              10000 Pixiehouses sale. After phase 1 Pixieland houses will allow
              owners to display their NFTs and create their own space using our 
              developer kit.
            </p>
          </div>
        </div>
        <div className={styles.grid1}>
          <div className={`${styles.card} ${styles.right}`}>
            <p className={styles.paragraph}> 
              {"Pixieland's first land sale will take place in Genesis city - the core of our metaverse. Users who own land will be able to place their pixie house and access the land editior where they can fully customize their land and use the developer kit. A token will also be made which will be used in the upcoming game."}
            </p>
          </div>
          <div className={`${styles.pixelated} ${styles.city}`}>
            <Image src='/city.png' width={500} height={500}></Image>
          </div>
        </div>
        <div id="Mint">
          <Mint/>
        </div>
        <div className={styles.grid1} id="Rarities">
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
        <div id="Roadmap">
          <Roadmap/>
        </div>
        <div id="FAQ">
          <FAQ></FAQ>
        </div>
        <div id="Team" className={styles.grid1}>
          <TeamDisplay/>
        </div>
      </main>
    </div>
  )
}