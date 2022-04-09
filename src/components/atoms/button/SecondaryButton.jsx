import styled from 'styled-components';

export const SecondaryButton = (props) => {
  const { children } = props;
  return <StButton>{children}</StButton>;
};

const StButton = styled.button`
  background-color: #70c6f5;
  color: #ffffff;
  padding: 6px 24px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
