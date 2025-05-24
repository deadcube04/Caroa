import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCollections } from '../../services/api/collection';
import type { Collection } from '../../@types/index';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  line-height: 1.7;
  text-align: center;
`;

export default function Collection() {
  const { id } = useParams<{ id: string }>();
  const [collection, setCollection] = useState<Collection | null>(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const data = await getCollections();
        const found = data.find((c: Collection) => String(c.id) === id);
        setCollection(found || null);
      } catch (error) {
        setCollection(null);
      }
    };
    fetchCollection();
  }, [id]);

  if (!collection) return <Container>Essa coleção não foi encontrada.</Container>;

  return (
    <Container>
      <Title>{collection.nome}</Title>
      <Image src={`/src/assets/${collection.imagem}`} alt={collection.nome} />
      <Description>{collection.descricao}</Description>
    </Container>
  );
}
