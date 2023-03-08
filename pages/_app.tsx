import { GlobalStyle } from '@/utils/GlobalStyle';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import Moralis from 'moralis';
import { useEffect, useState } from 'react';
import Preloader from '@/components/General/Preloader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Moralis.start({
  apiKey: process.env.NEXT_PUBLIC_MORALIS_API_KEY,
});

function MyApp({ Component, pageProps }: AppProps) {
  // a preloader can be added here
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  const activeChain = 'ethereum';
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Preloader loading={loading} />
      <ThirdwebProvider activeChain={activeChain}>
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  );
}

export default MyApp;
