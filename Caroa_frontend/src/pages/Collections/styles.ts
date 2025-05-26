import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Garante que o contêiner ocupe toda a altura da tela */
  padding: 2rem;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

export const CollectionCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.terciary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  width: 250px; /* Define largura fixa */
  height: 300px; /* Define altura fixa */

  &:hover {
    transform: scale(1.05);
  }
`;

export const CollectionImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CollectionTitle = styled.h3`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;