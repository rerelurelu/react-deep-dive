import styled from 'styled-components';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UseCard';

export const App = () => {
  return (
    <StLayout>
      <h1>Hi!</h1>
      <SearchInput />
      <UserCard />
    </StLayout>
  );
};

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
