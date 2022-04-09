import styled from 'styled-components';

export const PrimaryButton = (props) => {
  const { children } = props;
  return <StButton>{children}</StButton>;
};

const StButton = styled.button`
  background-color: #010718;
  color: #f1dca2;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 99px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
