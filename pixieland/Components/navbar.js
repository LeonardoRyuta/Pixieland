import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import styles from './component.module.css'
import Link from 'next/link'
import Script from 'next/script'
import { useWeb3React } from "@web3-react/core";
import Account from "../web3/account";
import useEagerConnect from "../web3/useEagerConnect";
import colors from "./colors";
import Home from '../pages/index'
import { useEffect } from 'react'

export default function Menu () {

    useEffect(() => {
        if (window.location.pathname != "/") {
          document.getElementById("menu").className = `${styles.mainNav} ${styles.mintNav}`
        } 
      }, [])

    const { account } = useWeb3React();

    const triedToEagerConnect = useEagerConnect();

    const scrollToElement = (e)=>{
        if (window.location.pathname != "/") {
            window.location.href = "/"    
            window.scrollTo(5000, 0);
        } 
        else {
            var doc = document.getElementById(`${e.target.innerHTML}`);
            doc.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }
    }

    const scrollToTopOfElement = (e)=>{
        if (window.location.pathname != "/") {
            window.location.href = "/"    
        } 
        else {
            var doc = document.getElementById(`${e.target.innerHTML}`);
            doc.scrollIntoView({behavior: "smooth"});
        }

    }

    return(
            <div className={styles.mainNav} id="menu">
                <Navbar bg='transparent'  variant="light" expand="lg" style={{width:"100vw"}}>
                <img onClick={()=>{window.location.href = "/"}} className={styles.sideLogo} src="pl_logo_test.png"></img>
                <Navbar.Toggle className={styles.Navbar} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{width:"100%"}}>
                    <Container className={styles.contain}>
                        {/* <Nav className={styles.scrollTabs} style={{width:"100%"}}> */}
                        <Nav style={{alignItems:"center", textAlign:"center", width:"100%", display:"flex", justifyContent:"center"}}>
                                {/* <Link href='/'><a className={styles.link}>Home</a></Link> */}
                                <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>About</a>
                                {/* <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>Mint</a> */}
                                <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>Rarities</a>
                                <a onClick={(e)=>{scrollToTopOfElement(e)}} className={styles.link}>Roadmap</a>
                                <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>FAQ</a>
                                <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>Team</a>
                                {/* <Link href='/map'><a className={styles.link}>Map</a></Link>
                                <Link href='/game'><a className={styles.link}>Game</a></Link> */}
                                {/* <Link href='/whitepaper'><a className={styles.link}>Whitepaper</a></Link> */}
                            </Nav>
                        {/* </Nav> */}
                    </Container>
                    <Container style={{width:"min-content"}}>
                        <Nav className={styles.connectWallet} style={{textAlign:"right"}}>
                                <a href="/mint" className={styles.link}>Mint</a>
                                <a href="/game" className={styles.link}>Game</a>
                                {/* <a className={`${styles.link} ${styles.account}`}><Account triedToEagerConnect={triedToEagerConnect} /></a> */}
                                <a className={`${styles.link}`} href='https://twitter.com/PixieLandNFT' target="_blank" rel="noreferrer">
                                    <img className={styles.twitterLogo} src={'/twitter.png'} width={40}/>
                                </a>
                            </Nav>
                    </Container>
                </Navbar.Collapse>
                </Navbar>
            </div>
    )
}