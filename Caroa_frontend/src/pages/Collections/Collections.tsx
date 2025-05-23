import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CollectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Garante que o contêiner ocupe toda a altura da tela */
  padding: 2rem;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const CollectionCard = styled(Link)`
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

const CollectionImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const CollectionTitle = styled.h3`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

const mockCollections = [
  { id: 1, title: 'Verão', image: '/src/assets/verao.jpg' },
  { id: 2, title: 'Primavera', image: '/src/assets/primavera.jpg' },
  { id: 3, title: 'Outono', image: '/src/assets/outono.jpg' },
];

export function Collections() {
  return (
    <CollectionsContainer>
      <CardGrid>
        {mockCollections.map((collection) => (
          <CollectionCard key={collection.id} to={`/produtos?colecao=${collection.title}`}>
            <CollectionImage src={collection.image} alt={collection.title} />
            <CollectionTitle>{collection.title}</CollectionTitle>
          </CollectionCard>
        ))}
      </CardGrid>
    </CollectionsContainer>
  );
}
