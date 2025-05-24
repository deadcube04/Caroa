import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 6rem auto 3rem auto;
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
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  margin-bottom: 1.5rem;
  text-align: center;
  text-decoration: underline;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;
`;

export default function About() {
  return (
    <AboutContainer>
      <Title>Sobre a Caroá</Title>
      <Paragraph>
        A Caroá foi criada para ponderar a cultura e tradição das gravuras da família Serafim e compartilhar elas com outras famílias. Ela é uma marca de moda que traz estampas de gravuras únicas feitas com detalhes especiais.
      </Paragraph>
      <Paragraph>
        Além de trazer um cuidado com o público, para que ele se conecte com a marca, a Caroá faz com que sua família inteira se conecte. São Gravuras da nossa família para a sua.
      </Paragraph>
      <Paragraph>
        Desta forma, é imprescindível consolidar a Caroá em sua imagem para refletir seus valores fundamentais, todos os dias. Quando a comunicação é bem desenvolvida e trabalhada, reforça a imagem que prezamos.
      </Paragraph>
      <Paragraph>
        Assim, não só o que dizemos é essencial para a marca, mas também como nos expressamos. Esse manual traz as regras que são a base da nossa comunicação. Elas explicam e definem os elementos básicos do nosso sistema visual e seu uso correto, para garantir a consistência da nossa identidade e uma linguagem coesa, alinhada com a estratégia da nossa marca.
      </Paragraph>
    </AboutContainer>
  );
}
