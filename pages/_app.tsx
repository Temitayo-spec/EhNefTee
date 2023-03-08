import { GlobalStyle } from '@/components/General/GlobalStyle';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'regenerator-runtime/runtime';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { connectors } from '@/utils/web3Config';
import Moralis from 'moralis';
import { useEffect } from 'react';

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

export async function getServerSideProps(context: any) {
  await Moralis.start({
    apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
  });
  return {
    props: {},
  };
}
