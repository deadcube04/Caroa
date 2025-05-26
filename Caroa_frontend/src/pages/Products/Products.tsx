import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import { getProducts } from '../../services/api/products';
import type { Product } from '../../@types/index';
import { useParams } from 'react-router-dom';
import * as S from './styles';

export function Products() {
  const [search, setSearch] = useState('');
  const [collectionFilter, setCollectionFilter] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const { collectionId } = useParams<{ collectionId: string }>();
  console.log('Collection ID:', collectionId);  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Remove produtos duplicados pelo nome
  const uniqueProducts = products.filter((product, idx, arr) =>
    arr.findIndex(p => p.nome.toLowerCase() === product.nome.toLowerCase()) === idx
  );

  const filteredProducts = uniqueProducts.filter((product) => {
    return (
      product.nome.toLowerCase().includes(search.toLowerCase()) &&
      (collectionFilter
        ? (product.colecaoId == parseInt(collectionFilter))
        : (collectionId ? product.colecaoId == parseInt(collectionId) : true)
      )
    );
  });

  return (
    <S.ProductsContainer>
      <S.SearchBar
        type="text"
        placeholder="Pesquisar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <S.FiltersContainer>
        <S.Filter value={collectionFilter} onChange={(e) => setCollectionFilter(e.target.value)}>
          <option value="">Coleção</option>
          <option value="1">Coleção Padrão</option>
          <option value="2">Coleção Nordestina</option>
        </S.Filter>
      </S.FiltersContainer>
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', marginTop: '2rem' }}>Nenhum resultado encontrado.</p>
      ) : (
        <S.CardGrid>
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.nome}
              price={`R$ ${product.preco.toFixed(2)}`}
              image={`/src/assets/${product.imagem}`}
            />
          ))}
        </S.CardGrid>
      )}
    </S.ProductsContainer>
  );
}