import { useNavigate } from 'react-router-dom';
import * as S from './styles';
export function Card({ title, price, image }: { title: string; price: string; image: string }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/produto/${title}`);
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.CardImage src={image} alt={title} />
      <S.CardContent>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardPrice>{price}</S.CardPrice>
      </S.CardContent>
    </S.CardContainer>
  );
}
