import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const App = () => {
  return (
    <Layout>
      <h1>Hi!</h1>
    </Layout>
  );
};
