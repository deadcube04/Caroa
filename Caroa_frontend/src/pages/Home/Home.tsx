import { HomeCarousel } from '../../components/carousel/Carousel'
import { Card } from '../../components/card/Card';
import styled from 'styled-components';

const CardGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: 1rem;  
  div {
  margin-bottom: 1rem;}
`;

const HomeContainer = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Bem-vindo à Caroa</h1>
      <HomeCarousel />
      <CardGrid>
        <Card title="Produto 1" price="R$ 100,00" image="/src/assets/vestido_florido.jpg" />
        <Card title="Produto 2" price="R$ 150,00" image="/src/assets/site-icon.png" />
        <Card title="Produto 3" price="R$ 200,00" image="/src/assets/macacão_branco_flores_pretas.jpg" />
        <Card title="Produto 4" price="R$ 250,00" image="/src/assets/camisa-branca-com-detalhes.jpg" />
      </CardGrid>
    </HomeContainer>
  );
}

export default Home
