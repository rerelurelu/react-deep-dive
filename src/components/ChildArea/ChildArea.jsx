import { memo } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 200px;
  background-color: #7cc8e9;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log('Component rendered!');

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('Hack');
  });

  return (
    <>
      {open ? (
        <Container>
          <p>Child component</p>
          <button onClick={onClickClose}>Close</button>
        </Container>
      ) : null}
    </>
  );
});

export default ChildArea;
