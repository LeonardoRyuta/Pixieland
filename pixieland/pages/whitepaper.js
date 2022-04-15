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
        console.log(text)
        const main = document.querySelector("main")
        main.innerHTML = text
        main.className = `${styles.main}`
        for (var x=0;x<6; x++){
          main.children[x].style.display = "none"
        }
        main.children[25].style.display = "flex"
        main.children[25].children[0].style.height = "3rem"
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