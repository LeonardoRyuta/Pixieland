import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const houses = ['420', '421', '1424', '1581', '1824', '3824', '420', '420', '421', '1424', '1581', '1824', '3824']

  const rarities = [
    {text: 'Radioactive: 0.1%', class: 'rad'}, 
    {text: 'Ruby: 0.5%', class: 'ruby'}, 
    {text: 'Emerald: 1%', class: 'emerald'}, 
    {text: 'Sapphire: 2%', class: 'sapphire'}, 
    {text: 'Gold: 3% ', class: 'gold'},
    {text: 'Silver: 4% ', class: 'silver'},
    {text: 'Copper: 5% ', class: 'copper'}
  ]

  return (
    <div>
      <Head> 
        <title>Pixieland | Home</title>
        <meta name="Pixieland" />
        <link rel="icon" href='/Butterfly.jpg' />
      </Head>

      <main className={styles.main} id="main">
        <h1 className={styles.title}>
          Pixieland
        </h1>
        <svg 
          onClick={()=>{scroll(0, (document.getElementById("info").offsetTop + 10))}} 
          xmlns="http://www.w3.org/2000/svg" className={`${styles.arrowdown}`} 
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </main>

      <div className={styles.scrollingimgs}>
        {
          houses.map((image, index) => (
            <img key={index} src={`/${image}.gif`} className={styles.scrollimg}/>
          ))
        }
      </div>

    <div style={{backgroundColor:"bisque"}} className={styles.centered} id="info">

      <div className={styles.grid}>
        <div className={styles.image}>
          <Image src='/firesnowhouse.gif' width={400} height={400} className="rounded" style={{borderRadius: "20px", boxShadow:"-4px -3px 45px 21px rgba(0,0,0,0.35)"}}/>
        </div>  
        <div>  
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
      </div>
      
      <div className={styles.grid}>
        <div className={styles.card} style={{textAlign:"right"}}>
          <h1 className={styles.subtitle}>
              Phase 2
          </h1>
            <p>
              Pixieland&apos;s first land sale will take place in Genesis city - the core of our metaverse. 
              Users who own land will be able to place their pixie house and access the land editior where they 
              can fully customize their land and use the developer kit.
              A token will also be made which will be used in the upcoming game.
            </p>
        </div>
        <div>
          <div className={styles.image}>
            <Image src='/abandoned.gif' width={400} height={400} className="rounded" style={{borderRadius: "20px", boxShadow:"-4px -3px 45px 21px rgba(0,0,0,0.35)"}}/>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.image}>
          <Image src='/7534.gif' width={400} height={400} className="rounded" style={{borderRadius: "20px", boxShadow:"-4px -3px 45px 21px rgba(0,0,0,0.35)"}}/>
        </div>
        <div className={styles.card}>
          <h1 className={styles.subtitle}>
            Phase 3
          </h1>
          <p> 
            Game Launch!!!
            Here players will be able to roam around Genesis city. 
            Owners of land and houses will be able to place them around 
            the city and customize them with other NFTs or use our developer kit to create virtually anything!
          </p>
        </div>
      </div>
    </div>

    <div style={{backgroundColor:"cornflowerblue"}} className={styles.rarityPart}>
      <h1 className={styles.rarityTitle}>
        Pixiehouse Rarity
      </h1>
      
      <div className={styles.rarityContent}>
            
            <div className={styles.rareImgs}/>

            <div className={styles.rarity}>

              <div className={styles.filler}>
                Percentage Chance
              </div>

              {
                rarities.map( (item, index) => (
                  <div key={index}>
                    <div className={styles.rareTitles}>{item.text}</div>
                    <div className={`${styles[item.class]}`}/>
                  </div>
                ))
              }
            </div>
          </div>
          
          <div className={styles.description}>
              When minting you have a chance of getting one of the traits about on your pixiehouse. 
              These traits can add value to your pixiehouse, and makes you cooler than others.
          </div>
        </div>
    </div>
  )
}


