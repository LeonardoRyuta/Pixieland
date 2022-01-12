import { Container, Nav, Navbar } from "react-bootstrap";
import styles from './component.module.css'
import Link from 'next/link'
import Script from 'next/script'
import { useWeb3React } from "@web3-react/core";
import Account from "../web3/account";
import useEagerConnect from "../web3/useEagerConnect";
import colors from "./colors";

export default function Menu () {
    const { account } = useWeb3React();

    const triedToEagerConnect = useEagerConnect();

    // var randomColor = CSS_COLOR_NAMES[Math.floor((Math.random() * CSS_COLOR_NAMES.length))]

    var delay = ms => new Promise(res => setTimeout(res, ms))

    async function namecolor(){
        for(var i=0; i<2; i++){
            document.getElementById("accname").style.color = colors[Math.floor((Math.random() * colors.length))]
            await delay(300)
        }
        namecolor()
    }



    return(
            <div >
                <Navbar bg='black'  variant="light" expand="lg">
                <Container className={styles.contain} width="100">
                    {/* <Navbar.Brand className={`text-white ${styles.Brand}`} href="/">
                        PixieLand
                    </Navbar.Brand> */}
                    <Navbar.Toggle className={styles.Navbar} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.right}>
                    <Link href='/'><a className={styles.link}>Home</a></Link>
                        <Link href='/mint'><a className={styles.link}>Mint</a></Link>
                        <Link href='/map'><a className={styles.link}>Map</a></Link>
                        <Link href='/game'><a className={styles.link}>Game</a></Link>
                        {/* <Link href='/whitepaper'><a className={styles.link}>Whitepaper</a></Link> */}
                        <a id="accname" onClick={()=>{namecolor()}} className={`${styles.link} ${styles.accname}`}><Account triedToEagerConnect={triedToEagerConnect} /></a>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}