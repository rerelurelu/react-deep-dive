import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const PrimaryButton = (props) => {
  const { children } = props;
  return <StButton>{children}</StButton>;
};

const StButton = styled(BaseButton)`
  background-color: #010718;
  color: #f1dca2;
`;
