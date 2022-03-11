import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/roadmap.module.css'

export default function Roadmap() {

  return (
    <div className={styles.roadmap}>

      <div>
        <div className={styles.Heading}>
          <div>
            01
          </div>
          <div className={styles.subTitle}>
            Pixihouse Sale
          </div>
        </div>
        <div className={styles.Content}>
          Phase 1, 10,000 Pixiehouses wil be sold at the price of 0.05 eth. 
          <br/>
          Whitelist member will have early access to minting and at 0.04 eth.
        </div>
      </div>

      <div>
        <div className={styles.Heading}>
          <div>
            02
          </div>
          <div className={styles.subTitle}>
            Early access game release
          </div>
        </div>
        <div className={styles.Content}>
          The early access version of the Pixieland game will be released for Pixiehouse holders.
          <br/>
          In the early access version users won't be able to interact with land yet, however, users will be able to interact with other players.
        </div>
      </div>

      <div>
        <div className={styles.Heading}>
          <div>
            03
          </div>
          <div className={styles.subTitle}>
            Game release & Land sale
          </div>
        </div>
        <div className={styles.Content}>
          The final version of the game and land sale will be release simultaneously.
          <br/>
          You will be able to mint land and if you are a Pixihouse holder you will be able to place your
          house on the land you minted.
        </div>
      </div>

      <div>
        <div className={styles.Heading}>
          <div>
            04
          </div>
          <div className={styles.subTitle}>
            Creation giveaway contest
          </div>
        </div>
        <div className={styles.Content}>
          Using the developer kit, Pixiehouse holders will be able to create virtually anything in their Pixiehouse.
          <br/>
          We will hold a contest to see who can make the most impressive creation.
          <br/>
          A prize pool will be distributed throughout the winners.
        </div>
      </div>

      <div>
        <div className={styles.Heading}>
          <div>
            05
          </div>
          <div className={styles.subTitle}>
            Long term plans
          </div>
        </div>
        <div className={styles.Content}>
          Pixiland is here to stay!
          <br/>
          We will brainstom ideas and plans for the future of Pixiland.
          <br/>
          We will further develop the game and periodically add new features.
          <br/>
          Pixland is a community driven project, therfore we will be very close to you all and listen to your thoughts!
        </div>
      </div>

    </div>
  )
}