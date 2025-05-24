import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/api/products";
import { getPendingOrder, updateOrder } from '../../services/api/order';
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

  const handleAddToCart = async () => {
    if (!product) return;
    try {
      // Busca o pedido pendente
      let pendingOrder = await getPendingOrder();
      if (pendingOrder) {
        // Verifica se o produto já está no pedido
        const existing = pendingOrder.produtos.find(p => p.produtoId === product.id);
        if (existing) {
          // Se já existe, incrementa a quantidade
          const newProdutos = pendingOrder.produtos.map(p =>
            p.produtoId === product.id ? { ...p, quantidade: p.quantidade + 1 } : p
          );
          await updateOrder(pendingOrder.id, { ...pendingOrder, produtos: newProdutos });
        } else {
          // Se não existe, adiciona novo produto
          const newProdutos = [...pendingOrder.produtos, { produtoId: product.id, quantidade: 1 }];
          await updateOrder(pendingOrder.id, { ...pendingOrder, produtos: newProdutos });
        }
      } else {
        // Se não existe pedido pendente, pode criar um novo aqui se desejar
        alert('Nenhum pedido pendente encontrado.');
        return;
      }
      alert(`${product.nome} foi adicionado ao carrinho!`);
    } catch (error) {
      alert('Erro ao adicionar ao carrinho!');
      console.error(error);
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
