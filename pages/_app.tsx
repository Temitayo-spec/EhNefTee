import { GlobalStyle } from '@/components/General/GlobalStyle';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import Moralis from 'moralis';

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = 'ethereum';
  return (
    <ThirdwebProvider
      activeChain={activeChain}
    >
      <>
        <Component {...pageProps} />
        <GlobalStyle />
      </>
    </ThirdwebProvider>
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
