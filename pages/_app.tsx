import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApeDaoProvider } from "../context/context";
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react';

// This is the active chainId your DAPP will work on!
const activeChainId = ChainId.Mumbai

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ApeDaoProvider>
        <Component {...pageProps} />
      </ApeDaoProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
