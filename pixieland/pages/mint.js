import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/mint.module.css'
import button from '../styles/button.module.css'
import { useWeb3React } from "@web3-react/core";
import Account from "../web3/account";
import useEagerConnect from "../web3/useEagerConnect";
import useContract from '../web3/useContract'
import { Component, useEffect, useState } from 'react'
import abi from "../web3/houses.json";
import dist from '@discordjs/collection';

export default function Mint(){
  const delay = ms => new Promise(res => setTimeout(res, ms))

  const { account } = useWeb3React();

  const [amountOfHouses, setAmount] = useState(1);
  const [isOnSale, setSaleState] = useState(false)
  //const contract = useContract("0xc6D4a3795B2877f9a57907A05e6ee8E41aFd3dB1", abi)

  //   // async mint()  {
  //   //   const house = await this.contract.mintHouse({value: parseEther("0.05"), gasPrice: 100000000000, gasLimit: 100000})
  //   //   console.log(house)
  //   // }

  const countdownTimeStart = () => {

    var countDownDate = new Date("Mar 20, 2022 23:13:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // console.log(distance + " " + now)
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = days + "days " + hours + "h " + minutes + "m " + seconds + "s ";
        
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            setSaleState(true);
        }
    }, 1000);
  }

  useEffect(async () => {
    // countdownTimeStart()
  }, [])

  const triedToEagerConnect = useEagerConnect();

  return (
    <div className={styles.body}>
      <Head> 
        <title>Pixieland | Mint</title>
        <meta name="Pixieland" 
        content="Pixieland's minting page"/>
        <link rel="icon" href='/Butterfly.png' />
      </Head>

        <div className={styles.card}>
          {
            isOnSale ?
            <div  className={styles.mintPart}>
              <h1>
                Pre-sale
              </h1>
              <div className={styles.mintContent}>
                {
                  account ?
                    <>
                      <div>
                        ?????/10,000
                      </div>
                      <a className={`${styles.account}`}>
                        <Account triedToEagerConnect={triedToEagerConnect} />         
                      </a>

                      <div style={{fontSize:"2rem"}}>
                        Price TBA
                      </div>

                      <div className={`${styles.flexCenter} ${styles.counter}`}>
                        <div onClick={() => { amountOfHouses > 1 ? setAmount(amountOfHouses - 1) : null}} className={styles.addminusButton}>
                          -
                        </div>
                        <div id="amountToBuy">
                          {amountOfHouses}
                        </div>
                        <div onClick={() => { amountOfHouses < 15 ? setAmount(amountOfHouses + 1) : null}} className={styles.addminusButton}>
                          +
                        </div>
                      </div>
                      <button id="mintButton" className={button.pixel2}>
                        Mint {amountOfHouses} {amountOfHouses > 1 ? "Houses" : "House"}
                      </button>
                    </>
                  :
                  <a>
                    <Account triedToEagerConnect={triedToEagerConnect} />         
                  </a>  
                }
              </div>

            </div>
            :
            <div className={styles.mintPart}>
              <h1 style={{textDecoration:"none"}}>
                Minting TBA
              </h1>
              <div id="countdown">

              </div>
            </div> 
          }
        </div>
    </div>
  )
}