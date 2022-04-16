import Head from 'next/head'
import styles from '../styles/whitepaper.module.css'
import { useEffect } from 'react'

export default function Whitepaper() {

  const delay = ms => new Promise(res => setTimeout(res, ms))

  useEffect(() => {

    const notionDocId = "21de34e9a15e4dbc8937827c70dd4fa4"

    fetch("https://potion-api.now.sh/html?id=" + notionDocId)
      .then(res => res.text())
      .then(text => {
        const main = document.querySelector("main")
        main.innerHTML = text
        main.className = `${styles.main}`
        for (var x=0;x<6; x++){
          main.children[x].style.display = "none"
        }

        const terrainDiv = document.createElement("div")
        const imgTerrain = document.createElement("img")
        imgTerrain.src = "/terrains.png"
        imgTerrain.className = `${styles.imageSize}`
        terrainDiv.className = `${styles.DIV}`
        terrainDiv.append(main.children[21])
        terrainDiv.append(imgTerrain)
        main.children[20].append(terrainDiv)
        // main.children[21].append(imgTerrain)

        const nineHousesDiv = document.createElement("div")
        const nineHouseDisplay = document.createElement("img")
        nineHouseDisplay.src = "/ninehouseDis.png"
        nineHouseDisplay.className = `${styles.imageSize}`
        nineHousesDiv.className = `${styles.DIV}`
        nineHousesDiv.append(main.children[18])
        nineHousesDiv.append(nineHouseDisplay)
        nineHousesDiv.append(main.children[18])
        main.children[17].append(nineHousesDiv)

        console.log(main.children)

        main.children[22].style.display = "flex"
        main.children[22].children[0].style.height = "3rem"
    })
  

  }, [])

    return (
      <div>
        <Head>
            <title>Pixieland | Whitepaper</title>
            <meta name="Pixieland" content="" />
        <link rel="icon" href='/Butterfly.jpg' />
        </Head>
        <div>
      <main className={`${styles.cover}`} id="main">
      </main>
      </div>  
      </div>
    )
  }