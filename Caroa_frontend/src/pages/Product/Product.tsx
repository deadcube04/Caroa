import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/api/products";
import type { Product } from "../../@types/index";
import * as S from "./styles";

export function Product() {
  const { title } = useParams<{ title: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const foundProduct = products.find(
          (p) => p.nome.toLowerCase() === title?.toLowerCase()
        );
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [title]);

  const handleAddToCart = () => {
    if (product) {
      alert(`${product.nome} foi adicionado ao carrinho!`);
    }
  };

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <S.ProductContainer>
      <S.ProductBox>
        <S.ProductImageContainer>
          <S.ProductImage
            src={`/src/assets/${product.imagem}`}
            alt={product.nome}
          />
        </S.ProductImageContainer>
        <S.ProductDetails>
          <S.ProductTitle>{product.nome}</S.ProductTitle>
          <S.ProductDescription>
            Tamanho: {product.tamanho}
          </S.ProductDescription>
          <S.ProductDescription>
            Quantidade disponível: {product.quantidade_estoque}
          </S.ProductDescription>
          <S.AddToCartButton onClick={handleAddToCart}>
            Adicionar ao Carrinho
          </S.AddToCartButton>
        </S.ProductDetails>
      </S.ProductBox>
    </S.ProductContainer>
  );
}
