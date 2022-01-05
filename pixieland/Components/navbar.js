import { Container, Nav, Navbar } from "react-bootstrap";
import styles from './component.module.css'
import Link from 'next/link'

export default function Menu () {
    return(
            <div>
                <Navbar className={styles.nav} bg='none' variant="light" expand="lg">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles.right}>
                        <span className={styles.link}><Link href='/'>Home</Link></span>
                        <span className={styles.link}><Link href='/mint'>Mint</Link></span>
                        <span className={styles.link}><Link href='/map'>Map</Link></span>
                        <span className={styles.link}><Link href='/game'>Game</Link></span>
                        <span className={styles.link}><Link href='/whitepaper'>Whitepaper</Link></span>
      
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
    )
}