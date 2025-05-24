import styled from 'styled-components';

export const StyledButton = styled.button<{ color: String }>`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: ${({ theme }) => theme.colors.complemt};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.complemt};
  }
`;