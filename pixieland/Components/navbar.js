import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import styles from './component.module.css'
import Link from 'next/link'
import Script from 'next/script'
import { useWeb3React } from "@web3-react/core";
import Account from "../web3/account";
import useEagerConnect from "../web3/useEagerConnect";
import colors from "./colors";
import Home from '../pages/index'

export default function Menu () {
    const { account } = useWeb3React();

    const triedToEagerConnect = useEagerConnect();

    const scrollToElement = (e)=>{
        // console.log(e.target.innerHTML)
        var doc = document.getElementById(`${e.target.innerHTML}`);
        doc.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

    return(
            <div className={styles.mainNav}>
                <Navbar bg='transparent'  variant="light" expand="lg">
                <img onClick={()=>{window.location.href = ""}} className={styles.sideLogo} src="pl_logo_test.png"></img>
                <Container className={styles.contain} >
                    <Navbar.Toggle className={styles.Navbar} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={styles.scrollTabs}>
                            {/* <Link href='/'><a className={styles.link}>Home</a></Link> */}
                            <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>About</a>
                            <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>Mint</a>
                            <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>Rarities</a>
                            <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>FAQ</a>
                            <a onClick={(e)=>{scrollToElement(e)}} className={styles.link}>Team</a>
                            {/* <Link href='/map'><a className={styles.link}>Map</a></Link>
                            <Link href='/game'><a className={styles.link}>Game</a></Link> */}
                            {/* <Link href='/whitepaper'><a className={styles.link}>Whitepaper</a></Link> */}
                        </Nav>
                        <Nav className={styles.connectWallet}>
                            {/* <a className={`${styles.link} ${styles.account}`}><Account triedToEagerConnect={triedToEagerConnect} /></a> */}
                            <a className={`${styles.link}`} href='https://twitter.com/PixieLandNFT' target="_blank" rel="noreferrer">
                                <img className={styles.twitterLogo} src={'/twitter.png'} width={40}/>
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}