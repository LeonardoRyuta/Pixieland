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


    return(
            <div >
                <Navbar bg='black'  variant="light" expand="lg">
                <Container className={styles.contain} width="100">
                    <Navbar.Toggle className={styles.Navbar} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.right}>
                        <Link href='/'><a className={styles.link}>Home</a></Link>
                        <Link href='/mint'><a className={styles.link}>Mint</a></Link>
                        <Link href='/map'><a className={styles.link}>Map</a></Link>
                        <Link href='/game'><a className={styles.link}>Game</a></Link>
                        {/* <Link href='/whitepaper'><a className={styles.link}>Whitepaper</a></Link> */}
                        <a className={`${styles.link} ${styles.account}`}><Account triedToEagerConnect={triedToEagerConnect} /></a>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}