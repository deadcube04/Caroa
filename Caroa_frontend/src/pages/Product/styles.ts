import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  margin-top: 5rem; /* Adiciona espaçamento para evitar sobreposição com a navbar */
`;

export const ProductImage = styled.img`
  width: 20rem;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
`;

export const ProductTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  margin-bottom: 1rem;
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.terciary};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ProductBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.terciary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
