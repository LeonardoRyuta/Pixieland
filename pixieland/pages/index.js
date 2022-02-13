import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const houses = ['420', '421', '1424', '1581', '1824', '3824', '420', '421', '1424', '1581', '1824', '3824']

  const rarities = [
    {text: 'Radioactive: 0.1%', class: 'Radioactive', active:"true"}, 
    {text: 'Ruby: 0.5%', class: 'Ruby', active:"false"}, 
    {text: 'Emerald: 1%', class: 'Emerald', active:"false"}, 
    {text: 'Sapphire: 2%', class: 'Sapphire', active:"false"}, 
    {text: 'Gold: 3% ', class: 'Gold', active:"false"},
    {text: 'Silver: 4% ', class: 'Silver', active:"false"},
    {text: 'Copper: 5% ', class: 'Copper', active:"false"}
  ]

  var buttonsState = 1
  var activeButton = "RadioactiveBut"

  const houseSelector = (e)=>{
    let rarityName = e.target.id.substring(0,e.target.id.length-3)

    // console.log(e)

    if (buttonsState === 0){
      if (e.target.className === styles.rareButton){
        e.target.className = styles.rareButtonClicked
        activeButton = e.target.id
        buttonsState++
      }
    } else if (buttonsState === 1) {
      document.getElementById(`${activeButton}`).className = styles.rareButton  
      e.target.className = styles.rareButtonClicked
      activeButton = e.target.id
    }

    for (var x=0; x<rarities.length; x++){
      if(rarities[x].active != "false"){
        rarities[x].active = "false"
        document.getElementById(`${rarities[x].class}`).className = styles.invisible
      }
      if (rarities[x].class === rarityName){
        if (rarities[x].active === "false"){
          document.getElementById(`${rarityName}`).className = styles.rarityCard
          rarities[x].active = "true"
        } else {
          document.getElementById(`${rarityName}`).className = styles.invisible
          rarities[x].active = "false"
        }
      }
    }

  }

  return (
    <div>
      <Head> 
        <title>Pixieland | Home</title>
        <meta name="Pixieland" />
        <link rel="icon" href='/Butterfly.jpg' />
      </Head>

      <div>
        <div className={styles.logoSection}>
          <img className={styles.logo} src="pixieland.png"/>
          <img className={styles.clouds} src="clouds.png"/>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.grid}>

          <div className={styles.previewSection}>
            <div className={styles.housesDisplay1}>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
            </div>
            <div className={styles.housesDisplay2}>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
            </div>
            <div className={styles.housesDisplay1}>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
              <img className={styles.houses} src="420.gif"/>
            </div>
          </div>

          <div className={styles.description}>
            <p className={styles.paragarph}>
              Mint and create with
            </p>
            <h1 className={styles.subTitle}>
              Pixiehouses  
            </h1> 
            <p className={styles.paragarph}>
              10000 Pixiehouses sale. 
              After phase 1 Pixieland houses will allow owners to display their NFTs and create their own space using our developer kit.
            </p>
          </div>

        </div>
      </div>

      <div className={`${styles.rarity}`}>
        <h1>
          Rarities
        </h1>

        <div className={styles.rarityContent}>

          <div className={styles.raritySelection}>
            <button className={styles.rareButtonClicked} id="RadioactiveBut" onClick={(e)=>{houseSelector(e)}}>
              Radioactive
            </button>
            <button className={styles.rareButton} id="RubyBut" onClick={(e)=>{houseSelector(e)}}>
              Ruby
            </button>
            <button className={styles.rareButton} id="EmeraldBut" onClick={(e)=>{houseSelector(e)}}>
              Emerald
            </button>
            <button className={styles.rareButton} id="SapphireBut" onClick={(e)=>{houseSelector(e)}}>
              Sapphire
            </button>
            <button className={styles.rareButton} id="GoldBut" onClick={(e)=>{houseSelector(e)}}>
              Gold
            </button>
            <button className={styles.rareButton} id="SilverBut" onClick={(e)=>{houseSelector(e)}}>
              Silver
            </button>
            <button className={styles.rareButton} id="CopperBut" onClick={(e)=>{houseSelector(e)}}>
              Copper
            </button>
          </div>

          <div className={styles.raritySection}>
            <div className={styles.rarityCard} id="Radioactive">
              <img className={styles.oneofones} src="1of1s/radioactive.gif"></img>
              <p className={styles.rareText}> this is the radioactive trait, you have a 0.1% chance of getting this trait in your Pixiehouse</p>
            </div>
            <div className={styles.invisible} id="Ruby">
              <img className={styles.oneofones} src="1of1s/ruby.gif"></img>
              <p className={styles.rareText}> this is the ruby trait, you have a 0.5% chance of getting this trait in your Pixiehouse</p> 
            </div>
            <div className={styles.invisible} id="Emerald">
              <img className={styles.oneofones} src="1of1s/emerald.gif"></img>
              <p className={styles.rareText}> this is the emerald trait, you have a 1% chance of getting this trait in your Pixiehouse</p>
            </div>
            <div className={styles.invisible} id="Sapphire">
              <img className={styles.oneofones} src="sapphire.gif"></img>
              <p className={styles.rareText}> this is the sapphire trait, you have a 2% chance of getting this trait in your Pixiehouse</p>
            </div>
            <div className={styles.invisible} id="Gold">
              <img className={styles.oneofones} src="1of1s/gold.gif"></img>
              <p className={styles.rareText}> this is the gold trait, you have a 3% chance of getting this trait in your Pixiehouse</p>
            </div>
            <div className={styles.invisible} id="Silver">
              <img className={styles.oneofones} src="1of1s/silver.gif"></img>
              <p className={styles.rareText}> this is the silver trait, you have a 4% chance of getting this trait in your Pixiehouse</p>
            </div>
            <div className={styles.invisible} id="Copper">
              <img className={styles.oneofones} src="1of1s/copper.gif"></img>
              <p className={styles.rareText}> this is the copper trait, you have a 5% chance of getting this trait in your Pixiehouse</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}


