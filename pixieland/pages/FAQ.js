import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Component } from 'react'
import styles from '../styles/faq.module.css'
import Accordion from 'react-bootstrap/Accordion'

export default function FAQ()  {
    const delay = ms => new Promise(res => setTimeout(res, ms))

    const changeToggle = async (e) => {
        e.target.classList.toggle(`${styles.toggleActive}`)
        e.target.parentElement.nextSibling.classList.toggle(`${styles.answerActive}`)
    }

    const [isActive, setIsActive] = useState(false);
    
        return (
            <div className={styles.main}>
                <h1 className={styles.pixelFontTitle}>FAQ</h1>
                
                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
                            <div className={styles.alignLeft}>
                                What is the supply & mint price?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`} >
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                There will be a total of 10,000 Pixiehouses available.
                                Mint price is yet to be determined. Updates will be posted on Twitter! 

                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
        
                            <div className={styles.alignLeft}>
                                When is the launch date?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                We have not determined a mint date yet. Updates will be posted on Twitter!
                                <br/>
                                NOTE: We will never have a stealth-launch, please be careful of scams. Official launch details will be shared on our website, Discord, and our Twitter page.

                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
                            <div className={styles.alignLeft}>
                                What are NFTs?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                            NFT stands for “non-fungible token” which are unique digital items that are stored and encrypted on the blockchain that people can buy, own, and trade. 
                            NFTs can simply be digital art but can have various benefits. 
                            They can be treated like membership cards where holders get exclusive access to things like websites, events, merchandise, and more.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
                            <div className={styles.alignLeft}>
                                What is the utility?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                Holders of a Pixieland NFT will get you a NFT of their own Pixiehouse, which will be used as an entry ticket to the Pixieland ecosystem. 
                                A Pixiehouse grants you access to the Pixieland game, holder-exclusive giveaways, airdrops, priority in future collections and many more! 
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
                            <div className={styles.alignLeft}>
                                How do I buy a Pixiehouse NFT?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                1. Sign up for Metamask or Coinbase Wallet and download the extension on your internet browser.
                                <br/>
                                2. Make sure you have enough Ethereum in your wallet to cover the total cost including gas fees.
                                <br/>
                                3. On mint day, there will be a Connect wallet button at the top of our website to connect to your wallet.
                                <br/>
                                4. Click on the mint button and you will be prompted to sign for your transaction. There will be a fee associated with every transaction related to gas prices
                                <br/>
                                5. Once you have made your purchase, your Pixiehouse NFTs will appear in your wallet and on Opensea!
                            </div>
                        </div>
                    </div>
                </div>

            </div>
          )
    }
