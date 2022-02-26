import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/mint.module.css'
import button from '../styles/button.module.css'
import { useWeb3React } from "@web3-react/core"
import { formatEther, parseEther } from '@ethersproject/units'
import useContract from '../web3/useContract'
import abi from "../web3/houses.json";


export default function Mint() {

    const { account } = useWeb3React();
    const contract = useContract("0xc6D4a3795B2877f9a57907A05e6ee8E41aFd3dB1", abi)

    const mint = async () => {
      const house = await contract.mintHouse({value: parseEther("0.05"), gasPrice: 100000000000, gasLimit: 100000})
      console.log(house)
    }

    return (
      <div>
        <div>
          <Head>
            <title>PixieLand | Mint</title>
            <meta name="Pixieland" content="" />
            <link rel="icon" href='/Butterfly.jpg' />
          </Head>
          <div id="mintmain" className={styles.card}>

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
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse1.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse2.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse3.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse4.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse5.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse6.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse7.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse8.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse1.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse2.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse3.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse4.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse5.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse6.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse7.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse8.gif"/>
                
              </div>
              <div  className={styles.mintPart}>
                <button className={button.pixel2} disabled style={{color: '#ffffff', opacity: '0.78'}}>
                  MINT House
                </button>
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
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse11.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse12.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse13.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse14.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse15.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse16.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse17.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse18.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse11.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse12.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse13.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse14.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse15.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse16.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse17.gif"/>
                <img className={styles.houses} src="/Pixiehouses/Pixiehouse18.gif"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
