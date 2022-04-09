import styled from 'styled-components';
import { BaseButton } from './BaseButton';

export const SecondaryButton = (props) => {
  const { children } = props;
  return <StButton>{children}</StButton>;
};

const StButton = styled(BaseButton)`
  background-color: #70c6f5;
  color: #ffffff;
`;
