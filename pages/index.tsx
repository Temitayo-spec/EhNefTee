import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Form from '@/components/UI/Form';
import { useAddress } from '@thirdweb-dev/react';
import Cookie from 'universal-cookie';

export default function Home() {
  const { push } = useRouter();

  const address = useAddress();
  const cookies = new Cookie();
  const walletAddress = cookies.get('walletAddress');

  useEffect(() => {
    if (address) {
      cookies.set('walletAddress', address), { path: '/' };
      push('/user/' + address);
      return;
    } else {
      push('/');
    }

    if (walletAddress) {
      cookies.set('walletAddress', walletAddress), { path: '/' };
      push('/user/' + walletAddress);
    } else {
      push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, walletAddress]);

  return (
    <>
      <Head>
        <title>Bank Hotel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
      </main>
    </>
  );
}
