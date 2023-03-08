import styled from 'styled-components';
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/common-evm-utils';
import { useRouter } from 'next/router';
import Card from '@/components/General/Card';
import { truncateAddress } from '@/utils/Truncate';
import Modal from '@/components/General/Modal';
import { useState } from 'react';
import { useDisconnect } from '@thirdweb-dev/react';
import Cookie from 'universal-cookie';

type Props = {
  nftCollections: any;
};

export default function NFTCollections({ nftCollections }: Props) {
  const [modalContent, setModalContent] = useState<any>(null);
  const [modal, setModal] = useState(false);
  const {
    query: { id },
    push,
  } = useRouter();
  const disconnect = useDisconnect();
  const cookies = new Cookie();

  return (
    <Container>
      {modal && <Modal modalContent={modalContent} setModal={setModal} />}
      <h1>NFT Collections</h1>
      <p>
        Wallet Address: <strong>{truncateAddress(id as string, 10, 10)}</strong>
      </p>
      <Button
        onClick={() => {
          disconnect();
          push('/');
          cookies.remove('walletAddress');
        }}
      >
        Logout
      </Button>
      <CardWrapper>
        {nftCollections.length < 1 ? (
          <p>No NFTs found.</p>
        ) : (
          nftCollections?.map((nftCollection: any) => (
            <>
              {JSON.parse(nftCollection?.metadata) && (
                <Card
                  key={nftCollection?.tokenId}
                  nftCollection={nftCollection}
                  setModalContent={setModalContent}
                  setModal={setModal}
                />
              )}
            </>
          ))
        )}
      </CardWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 2em 0;

  h1 {
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 40px;
    text-align: center;
    background: linear-gradient(90deg, #d69b24 0%, #dc1f10 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 30px;
      text-align: left;
      padding: 0.4em;
      width: 80%;
    }
  }

  & > p {
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #fff;
    letter-spacing: 2px;

    @media (max-width: 768px) {
      font-size: 10px;
      text-align: left;
      padding: 0.4em;
      width: 80%;
    }
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 90%;
  height: 100%;
  margin: 2em auto;

  & > p {
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #fff;
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getWalletNFTs({
    address: id,
    chain,
  });

  return {
    props: {
      nftCollections: response.raw.result,
    },
  };
}

const Button = styled.button`
  background: #d69b24;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 20px;
  position: absolute;
  top: 10px;
  right: 20px;

  &:hover {
    background: #dc1f10;
  }
`;
