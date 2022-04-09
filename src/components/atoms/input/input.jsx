import styled from 'styled-components';

export const Input = (props) => {
  const { placeholder = '' } = props;
  return <StInput type="text" placeholder={placeholder} />;
};

const StInput = styled.input`
  padding: 8px 16px;
  border: solid #dddddd 1px;
  border-radius: 99px;
  outline: none;
`;
