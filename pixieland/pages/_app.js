import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Layout from '../Components/layout'
import { Web3ReactProvider } from "@web3-react/core";
import getLibrary from "../web3/getLibrary";

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3ReactProvider>
      </div>
  )
}

export default MyApp
