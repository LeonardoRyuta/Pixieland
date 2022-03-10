import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Component } from 'react'
import styles from '../styles/bgimg.module.css'

export class Bgimg extends Component {
    
    constructor() {
        super()

    }
    
    render(){
        return (
            <div className={styles.bgimg}>

            </div>
          )
    }
}