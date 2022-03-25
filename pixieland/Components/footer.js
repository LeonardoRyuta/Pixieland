import Image from 'next/image'
import styles from './component.module.css'
import { useEffect } from 'react'

export default function Footer () {

    useEffect(() => {
        if (window.location.pathname != "/") {
          document.getElementById("foot").style.display = "none"
        } 
      }, [])

    return (
        <div className={styles.centered} id="foot">
            <footer className={styles.footer}>
                <div className={styles.grid}>
                    <div className={styles.padded}>
                        <a className={`${styles.link}`} href='https://twitter.com/PixieLandNFT' target="_blank" rel="noreferrer">
                            <Image className={styles.footerimage} src={'/twitter.png'} width={40} height={40}/>
                        </a>
                    </div>
                    {/* <div className={styles.padded}>
                        <a className={`${styles.link}`} href='https://discord.gg/FPkfRNPD8w'>
                            <Image className={styles.footerimage} src={'/discord.png'} width={45} height={45}/>
                        </a>
                    </div> */}
                </div>
            </footer>
        </div>
    )
}