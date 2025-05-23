import { useParams } from "react-router-dom";
import * as S from "./styles";

export function Product() {
  const { title } = useParams<{ title: string }>();

  const handleAddToCart = () => {
    alert(`${title} foi adicionado ao carrinho!`);
  };

  return (
    <S.ProductContainer>
      <S.ProductBox>
        {/* <S.ProductImage src={`/src/assets/${(title ?? 'default').toLowerCase()}.jpg`} alt={title ?? 'Produto'} /> */}
        <S.ProductImage
          src={`/src/assets/camisa-branca-com-detalhes.jpg`}
          alt={title ?? "Produto"}
        />
        <S.ProductDetails>
          <S.ProductTitle>{title}</S.ProductTitle>
          <S.ProductDescription>Tamanho: M</S.ProductDescription>
          <S.ProductDescription>Quantidade disponível: 10</S.ProductDescription>
          <S.AddToCartButton onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </S.AddToCartButton>
        </S.ProductDetails>
      </S.ProductBox>
    </S.ProductContainer>
  );
}
