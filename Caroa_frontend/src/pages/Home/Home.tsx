import { HomeCarousel } from '../../components/carousel/Carousel'
import { Card } from '../../components/card/Card';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/api/products';
import * as S from './styles';


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
    <S.HomeContainer>
      <HomeCarousel />
      <h2>Produtos mais vendidos</h2>
      <S.CardGrid>
        {topProducts.map((product) => (
          <Card
            key={product.id}
            title={product.nome}
            price={`R$ ${product.preco.toFixed(2)}`}
            image={`/src/assets/${product.imagem}`}
          />
        ))}
      </S.CardGrid>
    </S.HomeContainer>
  );
}

export default Home
