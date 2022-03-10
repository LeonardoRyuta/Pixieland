import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Component } from 'react'
import styles from '../styles/teamDisplay.module.css'

export default function TeamDisplay(){


        return (
            <div className={styles.main}>
                <h1 className={styles.Title}>
                    Team
                </h1>
                <div className={styles.teamPart}>
                    <div className={styles.teamMember}>
                        <img onClick={()=>{window.open('https://twitter.com/leo_ryuta', '_blank')}} src='https://pbs.twimg.com/profile_images/1462768787095269384/KW5ub6U5_400x400.jpg' className={styles.pfp}></img>
                        <h3 className={styles.Name}>
                            Leo
                        </h3>
                        <p className={styles.desc}> 
                            Development Team 
                            <br/>
                            Front-end Dev
                        </p>
                        <a className={styles.twitterLink} href='https://twitter.com/leo_ryuta' target="_blank" rel="noreferrer">
                            <img src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"/>
                        </a>
                    </div>

                    <div className={styles.teamMember}>
                        <img onClick={()=>{window.open('https://twitter.com/cesarhuret', '_blank')}} src='https://bafybeihppfea3xa76hyj5on3ehw4reyyiemyjlueqwmm3aawaq2rhklofy.ipfs.infura-ipfs.io/' className={styles.pfp}></img>
                        <h3 className={styles.Name}>
                            Kxsar
                        </h3>
                        <p className={styles.desc}> 
                            Development Team 
                            <br/>
                            Smart Contract Dev
                        </p>
                        <a className={styles.twitterLink} href='https://twitter.com/cesarhuret' target="_blank" rel="noreferrer">
                            <img src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"/>
                        </a>
                    </div>

                    <div className={styles.teamMember}>
                        <img onClick={()=>{window.open('https://twitter.com/flogi_eth', '_blank')}} src='https://cdn.discordapp.com/attachments/935249183575789606/951243034048229447/9649962C-7E06-4F11-8BAA-51425F405A46.jpg' className={styles.pfp}></img>
                        <h3 className={styles.Name}>
                            Flogi
                        </h3>
                        <p className={styles.desc}> 
                            Artist
                            <br/>
                            Smart Contract Dev
                        </p>
                        <a className={styles.twitterLink} href='https://twitter.com/flogi_eth' target="_blank" rel="noreferrer">
                            <img src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"/>
                        </a>
                    </div>

                    <div className={styles.teamMember}>
                        <img onClick={()=>{window.open('https://twitter.com/leo_ryuta', '_blank')}} src='https://bafybeihppfea3xa76hyj5on3ehw4reyyiemyjlueqwmm3aawaq2rhklofy.ipfs.infura-ipfs.io/' className={styles.pfp}></img>
                        <h3 className={styles.Name}>
                            Ken
                        </h3>
                        <p className={styles.desc}> 
                            Marketing 
                            <br/>
                            Smart Contract Dev
                        </p>
                        <a className={styles.twitterLink} href='' target="_blank" rel="noreferrer">
                            <img src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"/>
                        </a>
                    </div>
                </div>
            </div>
          )
    }
