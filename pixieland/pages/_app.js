import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Layout from '../Components/layout'
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "../web3/getLibrary";

function MyApp({ Component, pageProps }) {
  return ( 
    <Layout>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
      </Web3ReactProvider>
    </Layout>
  )
}

export default MyApp
