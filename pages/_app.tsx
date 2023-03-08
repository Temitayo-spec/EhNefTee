import { GlobalStyle } from '@/components/General/GlobalStyle';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import Moralis from 'moralis';

Moralis.start({
  apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
});

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = 'ethereum';
  return (
    <>
      <GlobalStyle />
      <ThirdwebProvider activeChain={activeChain}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
