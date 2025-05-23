import { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/card/Card';

const ProductsContainer = styled.div`
  padding: 2rem;
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

const mockProducts = [
  { id: 1, title: 'Camisa Branca', price: 'R$ 50,00', image: '/src/assets/camisa-branca-com-detalhes.jpg', collection: 'Verão', size: 'M', model: 'Casual' },
  { id: 2, title: 'Vestido Florido', price: 'R$ 80,00', image: '/src/assets/vestido_florido.jpg', collection: 'Primavera', size: 'G', model: 'Elegante' },
  { id: 3, title: 'Macacão Branco', price: 'R$ 100,00', image: '/src/assets/macacão_branco_flores_pretas.jpg', collection: 'Outono', size: 'P', model: 'Casual' },
];

export function Products() {
  const [search, setSearch] = useState('');
  const [collectionFilter, setCollectionFilter] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [modelFilter, setModelFilter] = useState('');

  const filteredProducts = mockProducts.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (collectionFilter ? product.collection === collectionFilter : true) &&
      (sizeFilter ? product.size === sizeFilter : true) &&
      (modelFilter ? product.model === modelFilter : true)
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
          <option value="Verão">Verão</option>
          <option value="Primavera">Primavera</option>
          <option value="Outono">Outono</option>
        </Filter>
        <Filter value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}>
          <option value="">Tamanho</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
        </Filter>
        <Filter value={modelFilter} onChange={(e) => setModelFilter(e.target.value)}>
          <option value="">Modelo</option>
          <option value="Casual">Casual</option>
          <option value="Elegante">Elegante</option>
        </Filter>
      </FiltersContainer>
      <CardGrid>
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </CardGrid>
    </ProductsContainer>
  );
}