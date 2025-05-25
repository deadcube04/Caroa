import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/card/Card';
import { getProducts } from '../../services/api/products';
import type { Product } from '../../@types/index';
import { useParams } from 'react-router-dom';

const ProductsContainer = styled.div`
  padding: 2rem;
  margin-top: 5rem; /* Garante que o conteúdo fique abaixo da navbar fixa */
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Filter = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

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
    <ProductsContainer>
      <SearchBar
        type="text"
        placeholder="Pesquisar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FiltersContainer>
        <Filter value={collectionFilter} onChange={(e) => setCollectionFilter(e.target.value)}>
          <option value="">Coleção</option>
          <option value="1">Coleção Padrão</option>
          <option value="2">Coleção Nordestina</option>
        </Filter>
      </FiltersContainer>
      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#888', marginTop: '2rem' }}>Nenhum resultado encontrado.</p>
      ) : (
        <CardGrid>
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.nome}
              price={`R$ ${product.preco.toFixed(2)}`}
              image={`/src/assets/${product.imagem}`}
            />
          ))}
        </CardGrid>
      )}
    </ProductsContainer>
  );
}