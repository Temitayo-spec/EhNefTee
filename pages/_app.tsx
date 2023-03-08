import { useEffect } from 'react';
import { GlobalStyle } from '@/components/General/GlobalStyle';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import Moralis from 'moralis';
import { useRouter } from 'next/router';
import { useAddress } from '@thirdweb-dev/react';
import Cookie from 'universal-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = 'ethereum';
  const { push } = useRouter();
  const address = useAddress();
  const cookies = new Cookie();

  useEffect(() => {
    if (address || cookies.get('walletAddress')) {
      cookies.set('walletAddress', address);
      push('/user/' + address);
    } else {
      push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

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
