import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/roadmap.module.css'

export default function Roadmap() {

  return (
    <div className={styles.roadmap}>

      <div className={styles.title}>
        Roadmap
      </div>

      <div>
        <div className={styles.Heading}>
          <div>
            01
          </div>
          <div className={styles.subTitle}>
            Prelaunch
          </div>
        </div>
        <div className={styles.Content}>
          Already prior to our launch we are eager to provide value to our community. 
          <br/>
          In order for Pixieland to get an exposure to a variety of other NFT projects, we are giving whitelist spots to their communities. 
          <br/>
          Whitelist spots will also be given out to reward members for helping the project grow and prosper our community, 
          <br/>
          therefore the whitelist mint price will be lower than the public mint price. 
        </div>
      </div>

      <div>
        <div className={styles.Heading}>
          <div>
            02
          </div>
          <div className={styles.subTitle}>
            Mint
          </div>
        </div>
        <div className={styles.Content}>
          On mint day, we will first open up the mint gates for our whitelisted people lasting 24 hours. 
          <br/>
          Following the whitelist mint, we will open up the gates for the public, which will also be open for 24 hours. 
          <br/>
          If we do not sell out, we will burn the remaining supply and proceed to the next phase. 
        </div>
      </div>

      <div>
        <div className={styles.Heading}>
          <div>
            03
          </div>
          <div className={styles.subTitle}>
            Postlaunch
          </div>
        </div>
        <div className={styles.Content}>
          Once minting is complete, we will publish the beta version of the Pixieland game for 500 Pixieland holders to test high traffic, solve potential emerging issues and improve for mass adoption. 
          <br/>
          If everything works as planned, we will open up the game for all Pixieland holders and will be further improved constantly. 
          <br/>
          There are also further benefits for Pixielanders. 
          <br/>
          Ultimately, we hope that we can be the reason for others to form valuable connections within this space and make long-term friends. 
        </div>
      </div>

      <div>
        <div className={styles.Heading}>
          <div>
            04
          </div>
          <div className={styles.subTitle}>
            Long Term plans
          </div>
        </div>
        <div className={styles.Content}>
          We are here for the long-term plans and that&apos;s why we are already thinking about the future of Pixieland.
          <br/>
          As we are a community-driven project we primarily do everything to benefit our holders. 
          <br/>
          All Pixielanders will get access to staking in the end of Q2 to earn $Pixie tokens. 
          <br/>
          As the Pixieland game is the heart of our project we are constantly trying improve and innovate in any way possible. 
          <br/>
          Planning to airdrop PixieCranes to our biggest supporters to upgrade their houses and simultaneously increase their staking yield and earn other rewards is just one of them. 
          <br/>
          Many more things are coming. Stay tuned! 
        </div>
      </div>

    </div>
  )
}