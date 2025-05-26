import { useEffect, useState } from 'react';
import { getCollections } from '../../services/api/collection';
import type { Collection } from '../../@types/index';
import * as S from './styles';


export function Collections() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const data = await getCollections();
        setCollections(data);
      } catch (error) {
        console.error('Error fetching collections:', error);
      }
    };

    fetchCollections();
  }, []);

  return (
    <S.CollectionsContainer>
      <S.CardGrid>
        {collections.map((collection) => (
          <S.CollectionCard key={collection.id} to={`/colecao/${collection.id}`}>
            <S.CollectionImage src={`/src/assets/${collection.imagem}`} alt={collection.nome} />
            <S.CollectionTitle>{collection.nome}</S.CollectionTitle>
          </S.CollectionCard>
        ))}
      </S.CardGrid>
    </S.CollectionsContainer>
  );
}
