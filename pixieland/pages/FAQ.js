import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Component } from 'react'
import styles from '../styles/faq.module.css'

export class FAQ extends Component {
    
    constructor() {
        super()

    }

    delay = ms => new Promise(res => setTimeout(res, ms))

    async changeToggle(e){
        var answer;
        var h = 210;
        if (e.target.id === "closed") {
            e.target.id = "opened"
            for (var y=0;y<45;y++) {
                e.target.style.transform = `rotateZ(${y}deg)`
            }
            answer = e.target.parentElement.nextSibling
            for (var x=0;x<h;x+=20) {
                answer.style.height = `${x}px`
                await this.delay(1)
            }
        } else {
            e.target.id = "closed"
            answer = e.target.parentElement.nextSibling
            answer.className = `${styles.answer}`
            for (var y=0;y<45;y++) {
                e.target.style.transform = `rotateZ(${45-y}deg)`
            }
            for (var x=0;x<h;x+=20) {
                answer.style.height = `${h-x}px`
                await this.delay(1)
            }
            answer.style.height = "0px"
        }
    }
    
    render(){
        return (
            <div className={styles.main}>
                <h1 className={styles.pixelFontTitle}>FAQ</h1>

                <div className={styles.item}> 
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`} >
                            <div className={styles.alignLeft}>
                                What are NFTs?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{this.changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`} >
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
                            <div className={styles.alignLeft}>
                                How do i buy a Pixiehouse?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{this.changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`} style={{height:"0px"}}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.faqContent}>
                        <div className={`${styles.itemContent}`}>
        
                            <div className={styles.alignLeft}>
                                When is the mint date?
                            </div>
                            <div className={styles.toggle} id="closed" onClick={(e)=>{this.changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`} style={{height:"0px"}}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
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
                            <div className={styles.toggle} id="closed" onClick={(e)=>{this.changeToggle(e)}}>
                                +
                            </div>
                        </div>
                        <div className={`${styles.answer}`} style={{height:"0px"}}>
                            <div className={`${styles.answerContent} ${styles.richtext}`}>
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                                Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... Sample Text ... 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
}