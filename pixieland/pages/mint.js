import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/mint.module.css'
import button from '../styles/button.module.css'
import { useWeb3React } from "@web3-react/core";
import Account from "../web3/account";
import useEagerConnect from "../web3/useEagerConnect";
import useContract from '../web3/useContract'
import { Component } from 'react'
import abi from "../web3/houses.json";

export class Mint extends Component {
  // const { account } = useWeb3React();

  constructor(){
    super()
    this.state = {
      account: '',
      connected: false
    }
    this.amountToBuy = 1
    // this.contract = useContract("0xc6D4a3795B2877f9a57907A05e6ee8E41aFd3dB1", abi)
  }
    // const { account } = useWeb3React();
    // const contract = useContract("0xc6D4a3795B2877f9a57907A05e6ee8E41aFd3dB1", abi)

    // async mint()  {
    //   const house = await this.contract.mintHouse({value: parseEther("0.05"), gasPrice: 100000000000, gasLimit: 100000})
    //   console.log(house)
    // }

    async connect(){
      try {
        if(window.ethereum) {
          const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
          this.setState({account: accounts[0], connected: true})
        }
      } catch(e) {
        console.log(e)
      }
    }

    componentDidMount() {
      document.addEventListener('scroll', ()=>{
        this.inView();
      })
    }
    
    inView() {
      console.log("hih")
      var counter;
      counter = document.getElementById('About');
      if (counter.getBoundingClientRect().top <= window.innerHeight) {
        document.getElementById("scrollUp").style.display = ""
      } else {
        document.getElementById("scrollUp").style.display = "none"
      }
    }

    addCounter(e){
      var innerHTML = e.target.innerHTML
      if (innerHTML === "+" && this.amountToBuy < 15) {
        this.amountToBuy++
        document.getElementById("amountToBuy").innerHTML = this.amountToBuy
      } else if(this.amountToBuy != 1 && innerHTML === "-") {
        this.amountToBuy--
        document.getElementById("amountToBuy").innerHTML = this.amountToBuy
      }
    }

    render(){
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
                {
                  this.state.connected ?
                    <div className={styles.mintContent}>
                      <div style={{textAlign:"center"}} className={styles.tab}>
                        Public Address:
                        <br/>
                        <p style={{fontSize:"1rem"}}>
                          {this.state.account}
                        </p>  
                      </div>
                      <div className={styles.tab}>
                        <div style={{textAlign:"center"}}>
                          Amout you are going to mint (max 15):
                        </div>
                        <div className={styles.flexCenter}>
                          <button onClick={(e)=>{this.addCounter(e)}} className={styles.addminusButton}>
                            -
                          </button>
                          <p id="amountToBuy" className={styles.amountToBuy}>
                            {this.amountToBuy}
                          </p>
                          <button onClick={(e)=>{this.addCounter(e)}} className={styles.addminusButton}>
                            +
                          </button>
                        </div>
                        <div className={styles.flexCenter}>                        
                          <button className={button.pixel2} disabled>
                            MINT House
                          </button>
                        </div>
                      </div>
                    </div>
                    :
                    <button className={`${styles.link} ${styles.account}`} onClick={()=>{this.connect()}}>Connect to Wallet</button>  
                  }
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
}