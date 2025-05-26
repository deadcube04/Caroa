import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  .historico {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem 0.3rem 0.5rem;
    margin: 1rem;
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.terciary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;
    cursor: pointer;
    padding: 0.5rem;
    transition: background-color 0.3s ease;
    svg {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.5rem;
    }
  }
`;

export const CartTable = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

export const CartTableHeader = styled.th`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.terciary};
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  text-align: left;
`;

export const CartTableRow = styled.tr`
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const CartTableCell = styled.td`
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.primary};
  svg {
    color: ${({ theme }) => theme.colors.red_600};
  }
  svg:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.red_200};
  }
`;

export const FinalizeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.terciary};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.extra};
  }
  &:active {
    transform: scale(0.98);
  }
`;
