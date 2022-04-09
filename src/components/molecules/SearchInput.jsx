import styled from 'styled-components';
import { PrimaryButton } from '../atoms/button/PrimaryButton';
import { Input } from '../atoms/input/input';

export const SearchInput = () => {
  return (
    <StContainer>
      <Input placeholder="Search..." />
      <StButtonWrapper>
        <PrimaryButton>Test</PrimaryButton>
      </StButtonWrapper>
    </StContainer>
  );
};

const StButtonWrapper = styled.div`
  padding-left: 8px;
`;

const StContainer = styled.div`
  display: flex;
  align-items: center;
`;
