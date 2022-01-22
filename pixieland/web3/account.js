import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useMetaMaskOnboarding from "./useMetaMaskOnboarding";
import { injected } from "./connectors";
import useENSName from "./useENSName";
import styles from '../styles/mint.module.css'

export default function Account ({ triedToEagerConnect }) {
    const { active, error, activate, chainId, account, setError } = useWeb3React();

    const {
        isMetaMaskInstalled,
        isWeb3Available,
        startOnboarding,
        stopOnboarding,
      } = useMetaMaskOnboarding();

    const [connecting, setConnecting] = useState(false);
    useEffect(() => {
        if (active || error) {
        setConnecting(false);
        stopOnboarding();
        }
    }, [active, error, stopOnboarding]);

    const ens = useENSName(account)

    if (error) {
        return null;
    }
    
    if (!triedToEagerConnect) {
        return null;
    }

    if (typeof account !== "string") {
        return (
          <div>
            {isWeb3Available ? (
              <button 
              className={styles.button}
                disabled={connecting}
                style={{color: 'white'}}
                onClick={() => {
                  setConnecting(true);
    
                  activate(injected, undefined, true).catch((error) => {
                    // ignore the error if it's a user rejected request
                    console.log(error)
                    if (error ) {
                      setConnecting(false);
                    } else {
                      setError(error);
                    }
                  });
                }}
              >
                {isMetaMaskInstalled ? "Connect to MetaMask" : "Connect to Wallet"}
              </button>
            ) : (
              <button className={styles.button} onClick={startOnboarding} style={{color: 'white'}}>Install Metamask</button>
            )}
          </div>
        );
    }
      
    return (
        <div>
          {ens || (account.substring(0,5) + "..." + account.substring(account.length-4, account.length))}
        </div>
      );
}