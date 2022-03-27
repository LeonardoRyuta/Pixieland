import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import FAQ  from './FAQ'
import TeamDisplay from './teamDisplay'
import Roadmap from './roadMap'
import Mint from './mint'
import Collab from './collab.js'

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
  const [butterFlyMove, setMovement] = useState(0)

  useEffect(() => {
    document.addEventListener('scroll', (e)=>{
      inView(e);
    })
    preRenderImgs()
  
  }, [])

  const preRenderImgs = () => {
    tabs.map((tab, index) => {
      setTab(tab)
    })
    setTab(tabs[0])
  }

  const inView = (e) => {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // console.log(scrollTop)
    setMovement(-(scrollTop/10))
    var counter;
    counter = document.getElementById('About');
    if (counter.getBoundingClientRect().top <= window.innerHeight) {
      document.getElementById("scrollUp").style.display = ""
    } else {
      document.getElementById("scrollUp").style.display = "none"
    }

    if (document.getElementById("plane1").getBoundingClientRect().top <= window.innerHeight) {
        document.getElementById("plane1").style.transform = "translateY(-96.5rem) scale(3)"
        document.getElementById("plane2").style.transform = "translateY(-95rem) scale(3)"
    } else {
      document.getElementById("plane1").style.transform = "translateY(-96.5rem)"
      document.getElementById("plane2").style.transform = "translateY(-95rem)"
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
      <div style={{transform:`translateY(${butterFlyMove}px)`}} className={styles.parent}>
        <div className={styles.flexcenter}>
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
              {"Pixieland is a collection of 10,000 algorithmically generated Pixiehouses NFTs living on the blockchain, created from a combination of over 370 traits varying rarity across different categories. There will be some 1 of 1’s sprinkled in the collection, and you might get lucky and mint one. Holders of a Pixiehouse will be granted access to the Pixieland game. Our vision is to connect likeminded people within the NFT space in a fun way, by providing the gamified Pixieland platform!"}
            </p>
          </div>
          <div className={`${styles.pixelated} ${styles.city}`}>
            <Image src='/city.png' width={500} height={500}></Image>
          </div>
        </div>

        <div className={styles.grid2} id="Rarities">
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
          <div className={`${styles.pixelated} ${styles.city} ${styles.traitsBox} ${styles.chronoType}`}>
            <div style={{textAlign:"center", width:"100%", fontFamily:"ChronoType", fontSize:"2.5rem"}}>
              Some Traits:
            </div>
            {/* <Image src={`/1of1s/${currentTab[0].toLowerCase()}.gif`} width={400} height={400}></Image> */}
            <div className={`${styles.pixelated} ${styles.city} ${styles.traitsBox}`}>
              <div className={styles.trait}>
                <h4>Bars</h4>
                <Image src={`/bars/${currentTab[0].toLowerCase()}.png`} width={100} height={100} priority={true}></Image>
              </div>
              <div className={styles.trait}>
                <h4>Chimney</h4>
                <Image src={`/chimney/${currentTab[0].toLowerCase()}.png`} width={100} height={100} priority={true}></Image>
              </div>
              <div className={styles.trait}> 
                <h4>Door</h4>
                <Image src={`/door/${currentTab[0].toLowerCase()}_closed.png`} width={70} height={100} priority={true}></Image>
              </div>
              {/* <div className={styles.trait}>
                <h4>Doormat</h4>
                <Image src={`/doormat/${currentTab[0].toLowerCase()}.png`} width={100} height={100}></Image>
              </div> */}
              <div className={styles.trait}>
                <h4>Flower Pots</h4>
                <Image src={`/flower_pots/${currentTab[0].toLowerCase()}.png`} width={100} height={100} priority={true}></Image>
              </div>
              <div className={styles.trait}>
                <h4>Lamps</h4>
                <Image src={`/outdoor_lamps/${currentTab[0].toLowerCase()}.png`} width={25} height={100} priority={true}></Image>
              </div>
              <div className={styles.trait}>
                <h4>Satellite Dish</h4>
                <Image src={`/satellite_dish/${currentTab[0].toLowerCase()}.png`} width={80} height={100} priority={true}></Image>
              </div>
              <div className={styles.trait}>
                <h4>Solarpanels</h4>
                <Image src={`/solarpanels/${currentTab[0].toLowerCase()}.png`} width={100} height={100} priority={true}></Image>
              </div>
              <div className={styles.trait}>
                <h4>Window</h4>
                <Image src={`/window_color/${currentTab[0].toLowerCase()}.png`} width={100} height={100} priority={true}></Image> 
              </div>
            </div>
          </div>
        </div>

        <div className={styles.townbg}>
          <img src='planemd.png' id="plane1" className={styles.plane} style={{transform:"translateY(-96.5rem)", left:"6rem"}}></img>
          <img src='planesd.png' id="plane2" className={styles.plane} style={{transform:"translateY(-95rem)", right:"6rem"}}></img>
          <div id="Roadmap" className={styles.grid1}>
            <Roadmap/>
          </div>
          <div id="FAQ">
            <FAQ></FAQ>
          </div>
          <div id="Team" className={styles.grid1}>
            <TeamDisplay/>
          </div>
        </div>
        <div className={styles.grid1}>
          <Collab/>
        </div>
      </main>
    </div>
  )
}