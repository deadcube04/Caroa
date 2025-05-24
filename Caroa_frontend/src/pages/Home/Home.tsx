import { HomeCarousel } from '../../components/carousel/Carousel'
import { Card } from '../../components/card/Card';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api/products';

const CardGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: .0rem;  
  div {
  margin-bottom: 1rem;}
`;

const HomeContainer = styled.div`
  text-align: center;
  padding-top: 2.5rem;
  
    h2 {
    padding: 1rem;
      font-size: ${({ theme }) => theme.font.sizes.large};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;

function Home() {
  const [topProducts, setTopProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchTopProducts() {
      try {
        const products = await getProducts();
        // Ordena pelos mais vendidos (quantidade_vendida) e pega os 4 primeiros
        const sorted = [...products].sort((a, b) => (b.quantidade_vendida || 0) - (a.quantidade_vendida || 0));
        setTopProducts(sorted.slice(0, 4));
      } catch (error) {
        setTopProducts([]);
      }
    }
    fetchTopProducts();
  }, []);

  return (
    <HomeContainer>
      <HomeCarousel />
      <h2>Produtos mais vendidos</h2>
      <CardGrid>
        {topProducts.map((product) => (
          <Card
            key={product.id}
            title={product.nome}
            price={`R$ ${product.preco.toFixed(2)}`}
            image={`/src/assets/${product.imagem}`}
          />
        ))}
      </CardGrid>
    </HomeContainer>
  );
}

export default Home
