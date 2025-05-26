import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCollections } from '../../services/api/collection';
import type { Collection } from '../../@types/index';
import * as S from './styles';

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

  if (!collection) return <S.Container>Essa coleção não foi encontrada.</S.Container>;

  return (
    <S.Container>
      <S.Title>{collection.nome}</S.Title>
      <S.Image src={`/src/assets/${collection.imagem}`} alt={collection.nome} />
      <S.Description>{collection.descricao}</S.Description>
    </S.Container>
  );
}
