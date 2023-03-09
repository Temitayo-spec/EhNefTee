import React from 'react';
import styled from 'styled-components';
import { truncateAddress } from '../../utils/Truncate';

const Modal = ({ modalContent, setModal }: any) => {
  console.log(modalContent);
  const cardImage = JSON.parse(modalContent?.metadata)?.image?.includes(
    'ipfs://'
  )
    ? `https://ipfs.io/ipfs/${
        JSON.parse(modalContent?.metadata)?.image?.split('ipfs://')[1]
      }`
    : JSON.parse(modalContent?.metadata)?.image;
  return (
    <ModalWrapper
      onClick={() => {
        setModal(false);
      }}
    >
      <ModalContent
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <LHS>
          <CardImage
            src={cardImage}
            alt={JSON.parse(modalContent?.metadata)?.name}
          />
        </LHS>

        <RHS>
          <DIV>
            <h3>{JSON.parse(modalContent?.metadata)?.name}</h3>
            <p>
              <span>Description:</span>
              {JSON.parse(modalContent?.metadata)?.description}
            </p>
            <p>
              <span>Contract Type:</span>
              {modalContent?.contract_type}
            </p>
            <p>
              <span>Minter Address:</span>
              {truncateAddress(modalContent?.minter_address, 10, 10)}
            </p>
            <p>
              <span>Owner Address:</span>
              {truncateAddress(modalContent?.owner_of, 10, 10)}
            </p>
            <p>
              <span>Symbol:</span>
              {modalContent?.symbol}
            </p>
            <a
              href={`https://opensea.io/assets/ethereum/${modalContent?.token_address}/${modalContent?.token_id}`}
              target="_blank"
              rel="noreferrer"
            >
              Purchase Nft
            </a>

            <h4>Click Outside to close Modal</h4>
          </DIV>
        </RHS>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  width: 80%;
  height: 80%;
  background: linear-gradient(90deg, #d69b24 0%, #dc1f10 100%);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 90%;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
`;

const LHS = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2em;
  border: 0.75px solid #000;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
`;

const RHS = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.2em;

  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #d69b24;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #dc1f10;
  }
`;

const DIV = styled.div`
  width: 100%;
  height: 100%;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    font-family: var(--secondary-font);
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    background: linear-gradient(90deg, #d69b24 0%, #fff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px #fff;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 300;
    color: #fff;
    font-family: var(--primary-font);
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 0.5em 0;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  a {
    font-size: 1.2rem;
    font-weight: 300;
    color: #fff;
    font-family: var(--primary-font);
    display: flex;
    justify-self: flex-end;
    align-self: flex-end;
    flex-direction: column;
    gap: 0.5em;
    margin: 0.5em;
    text-decoration: none;
    background: linear-gradient(90deg, #d69b24 0%, #fff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 10px #fff;
    border: 0.5px solid #fff;
    padding: 0.5em;
    border-radius: 5px;

    &:hover {
      background: linear-gradient(90deg, #dc1f10 0%, #fff 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 0 10px #fff;
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #333;
    font-family: var(--primary-font);
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    margin: 0.5em 0;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  span {
    font-weight: 600;
    font-size: 1.2rem;
    color: #fff;
    font-family: var(--primary-font);

    @media (max-width: 768px) {
      font-size: 0.6rem;
    }
  }
`;
