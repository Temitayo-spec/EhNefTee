import { useRouter } from 'next/router';
import { SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { ConnectWallet } from '@thirdweb-dev/react';
import Cookie from 'universal-cookie';

const Form = () => {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const { push } = useRouter();
  const cookies = new Cookie();

  return (
    <Wrapper>
      <H1>Connect Your Wallet</H1>
      <FormContainer>
        <FormGroup>
          <Label htmlFor="wallet address">Wallet Address</Label>
          <Input
            type="text"
            id="wallet address"
            placeholder="Enter your wallet address"
            value={walletAddress}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setWalletAddress(e.target.value)
            }
          />
        </FormGroup>

        <ButtonContainer>
          <Button
            type="button"
            onClick={() => {
              cookies.set('walletAddress', walletAddress);
              push('/user/' + walletAddress);
            }}
            disabled={walletAddress.length < 30}
            className={walletAddress.length < 30 ? 'disabled' : ''}
          >
            Connect
          </Button>
          <ConnectWithMetaMask />
        </ButtonContainer>
      </FormContainer>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const H1 = styled.h1`
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 40px;
  text-align: center;
  background: linear-gradient(90deg, #d69b24 0%, #dc1f10 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 0.5rem;
  color: var(--primary-color);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  outline: none;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  outline: none;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 16px;
  background: linear-gradient(90deg, #d69b24 0%, #dc1f10 100%);
  color: #fff;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #dc1f10 0%, #d69b24 100%);
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const ConnectWithMetaMask = styled(ConnectWallet)`
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  outline: none;
  font-family: var(--secondary-font);
  font-weight: 400;
  font-size: 16px;
  background: linear-gradient(90deg, #d69b24 0%, #dc1f10 100%);
  color: #fff;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(90deg, #dc1f10 0%, #d69b24 100%);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
