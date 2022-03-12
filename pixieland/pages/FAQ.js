import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Component } from 'react'
import styles from '../styles/faq.module.css'

export default function FAQ()  {
    const delay = ms => new Promise(res => setTimeout(res, ms))

    const changeToggle = async (e) => {
        var answer;
        var answerContent;
        var h;
        if (e.target.id === "closed") {
            e.target.id = "opened"
            for (var y=0;y<45;y++) {
                e.target.style.transform = `rotateZ(${y}deg)`
                await delay(1)
            }
            answer = e.target.parentElement.nextSibling
            answerContent = e.target.parentElement.nextSibling.firstChild
            h = answerContent.offsetHeight + 20
            for (var x=0;x<h;x+=10) {
                answer.style.height = `${x}px`
                await delay(1)
            }
        } else {
            e.target.id = "closed"
            answer = e.target.parentElement.nextSibling
            answerContent = e.target.parentElement.nextSibling.firstChild
            h =answerContent.offsetHeight + 20
            answer.className = `${styles.answer}`
            for (var y=0;y<45;y++) {
                e.target.style.transform = `rotateZ(${45-y}deg)`
                await delay(1)
            }
            for (var x=0;x<h;x+=10) {
                answer.style.height = `${h-x}px`
                await delay(1)
            }
            answer.style.height = "0px"
        }
    }
    
        return (
            <div className={styles.main}>
                <h1 className={styles.pixelFontTitle}>FAQ</h1>
                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
                            <div className={styles.alignLeft}>
                                How do i buy a Pixiehouse?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`} style={{height:"0px"}}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                1. Set up and connect your Metamask wallet on our mint section above.
                                <br/>
                                2. Make sure you have enough Ethereum to mint one of our NFTs.
                                <br/>
                                3. Click the &quot;Mint House&quot; button on the mint section and approve the transaction.
                                <br/>
                                4. Once the transaction has gone through, check out your freshly minted NFT on OpenSea.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
        
                            <div className={styles.alignLeft}>
                                When is the mint date and how much will it be?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`} style={{height:"0px"}}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                The mint date is still to be decided and the mint price will be 0.05 eth but for whitelist memebers it will be 0.04 eth. 
                                Join our discord to be always up to date!
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
                        <div className={`${styles.answer}`} style={{height:"0px"}}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                Pixiehouse owners will be able to use their NFT in our upcoming metaverse. 
                                Here owners will be able to display other NFTs, and make awesome creations using our developer kit.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
                            <div className={styles.alignLeft}>
                                How can I contact the team?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`} style={{height:"0px"}}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                You can contact use through our twitter or in the discord server, we will try to respond as fast as we can!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
