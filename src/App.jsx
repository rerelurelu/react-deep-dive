import styled from 'styled-components';
import { SearchInput } from './components/molecules/SearchInput';

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
      <SearchInput />
    </StLayout>
  );
};

export default App;
