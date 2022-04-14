import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Component } from 'react'
import styles from '../styles/teamDisplay.module.css'

export default function TeamDisplay(){

    const teamMembs = [
        ['Leo', 'Development Team', 'Front-end Dev', 'https://twitter.com/leo_ryuta', '/pfps/LeoTwitterPFP.jpg'],
        ['Cesar', 'Development Team', 'Smart Contract Dev', 'https://twitter.com/cesarhuret', 'https://bafybeihppfea3xa76hyj5on3ehw4reyyiemyjlueqwmm3aawaq2rhklofy.ipfs.infura-ipfs.io/'],
        ['Flogi', 'Founder', 'Artist', 'https://twitter.com/flogi_eth', 'https://cdn.discordapp.com/attachments/935249183575789606/951243034048229447/9649962C-7E06-4F11-8BAA-51425F405A46.jpg']
    ]

        return (
            <div className={styles.main}>
                <h1 className={styles.Title}>
                    Team
                </h1>
                <div className={styles.teamPart}>
                    {
                        teamMembs.map((member) => (
                            <div className={styles.teamMember}>
                                <img onClick={()=>{window.open(member[3], '_blank')}} src={member[4]} className={styles.pfp}></img>
                                <h3 className={styles.Name}>
                                    {member[0]}
                                </h3>
                                <p className={styles.desc}> 
                                    {member[1]} 
                                    <br/>
                                    {member[2]}
                                </p>
                                <a className={styles.twitterLink} href={member[3]} target="_blank" rel="noreferrer">
                                    <img src="https://assets-global.website-files.com/61e9ad107f42425177667f64/61e9c011b3741a9b3bb28169_Vector%20(8).svg"/>
                                </a>
                            </div> 
                        ))
                    }
                </div>
            </div>
          )
    }
