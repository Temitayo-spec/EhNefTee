import styled from 'styled-components';
import { useState } from 'react';

type Props = {
  nftCollection: any;
  setModalContent: (modalContent: any) => void;
  setModal: (modal: boolean) => void;
};

const Card = ({ nftCollection, setModalContent, setModal }: Props) => {
  const [hidden, setHidden] = useState(false);
  const cardImage = JSON.parse(nftCollection?.metadata)?.image?.includes(
    'ipfs://'
  )
    ? `https://ipfs.io/ipfs/${
        JSON.parse(nftCollection?.metadata)?.image?.split('ipfs://')[1]
      }`
    : JSON.parse(nftCollection?.metadata)?.image;
  return (
    <CardWrapper
      onClick={() => {
        setModalContent(nftCollection);
        setModal(true);
      }}
      key={nftCollection?.tokenId}
      className={hidden ? 'hidden' : ''}
    >
      {JSON.parse(nftCollection?.metadata)?.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <CardImage
          src={cardImage}
          alt={JSON.parse(nftCollection?.metadata)?.name}
        />
      )}
      <TextContainer>
        <h3>{JSON.parse(nftCollection?.metadata)?.name}</h3>
        <p>Click to view in details.</p>
      </TextContainer>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em;
  &.hidden {
    display: none;
  }
  border: 0.75px solid;
  background: linear-gradient(
    90deg,
    rgba(214, 155, 36, 0.3) 0%,
    rgba(220, 31, 16, 0.3) 100%
  );
  border-radius: 10px;
  cursor: pointer;
  position: relative;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;

  &.hidden {
    display: none;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  width: 90%;
  height: auto;
  padding: 1rem;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(18.75px);
  background: linear-gradient(
      90deg,
      rgba(214, 155, 36, 0.1) 0%,
      rgba(220, 31, 16, 0.1) 100%
    ),
    linear-gradient(0deg, rgba(228, 90, 21, 0.1), rgba(228, 90, 21, 0.1));
  border-radius: 10px;

  h3 {
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    background: linear-gradient(90deg, #d69b24 0%, #dc1f10 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-overflow: ellipsis;
  }
  p {
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 16px;
    color: #fff;
  }
`;
