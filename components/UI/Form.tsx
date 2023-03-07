import { useRouter } from 'next/router';
import { SetStateAction, useState } from 'react';
import styled from 'styled-components';

type Props = {
  handleAuth: any;
};

const Form = ({ handleAuth }: Props) => {
  const [walletAddress, setWalletAddress] = useState<string>('');

  const { push } = useRouter();

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
          <Button type="submit" onClick={() => push('/user/' + walletAddress)}>
            Connect
          </Button>
          <Button type="button" onClick={() => handleAuth('injected')}>
            Connect with MetaMask
          </Button>
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
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
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
`;

const Button = styled.button`
  padding: 0.5rem;
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
`;
