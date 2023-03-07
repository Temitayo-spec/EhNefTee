import { GlobalStyle } from '@/components/General/GlobalStyle';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'regenerator-runtime/runtime';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { connectors } from '@/utils/web3Config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={[
        1, // Mainnet
        3, // Ropsten
        4, // Rinkeby
        5, // Goerli
        42, // Kovan
        100, // xDai
        137, // Polygon
        80001, // Mumbai
      ]}
    >
      <>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
