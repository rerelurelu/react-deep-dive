import styled from 'styled-components';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const App = () => {
  return (
    <StLayout>
      <h1>Hi!</h1>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
    </StLayout>
  );
};

export default App;
