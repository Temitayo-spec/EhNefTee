import styled from 'styled-components';

const ConnectButton = () => {
  return (
    <div className="container">
        <Button type="button" onClick={""} className="">
          Wallet Connected
        </Button>
        <Button type="button" onClick={""}>
          Connect Wallet
        </Button>
      <h2>
        Address:<b> {}</b>
      </h2>
      <h2>
        ChainId:<b> {}</b>
      </h2>
    </div>
  );
};
export default ConnectButton;

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
