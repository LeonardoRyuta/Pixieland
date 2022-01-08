import Image from 'next/image'
import styles from './component.module.css'

export default function Footer () {
    return (
        <div className={styles.centered}>
            <footer className={styles.footer}>
                <div className={styles.grid}>
                    <div className={styles.padded}>
                        <a className={`${styles.link}`} href='https://twitter.com/PixieLandNFT'>
                            <Image className={styles.footerimage} src={'/twitter.png'} width={40} height={40}/>
                        </a>
                    </div>
                    <div className={styles.padded}>
                        <a className={`${styles.link} ${styles.larger}`} href='https://twitter.com/PixieLandNFT'>OpenSea</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}