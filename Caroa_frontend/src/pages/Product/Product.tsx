import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/api/products";
import { getPendingOrder, updateOrder } from '../../services/api/order';
import type { Product } from "../../@types/index";
import * as S from "./styles";

export function Product() {
  const { title } = useParams<{ title: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const availableSizes = ["PP", "P", "M", "G", "GG"];

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
    if (!selectedSize) {
      alert("Selecione um tamanho antes de adicionar ao carrinho.");
      return;
    }
    try {
      let pendingOrder = await getPendingOrder();
      if (pendingOrder) {
        // Verifica se já existe o mesmo produto com o mesmo tamanho
        const existing = pendingOrder.produtos.find(
          p => p.produtoId === product.id && p.tamanho === selectedSize
        );
        if (existing) {
          // Se já existe, incrementa a quantidade
          const newProdutos = pendingOrder.produtos.map(p =>
            p.produtoId === product.id && p.tamanho === selectedSize
              ? { ...p, quantidade: p.quantidade + 1 }
              : p
          );
          await updateOrder(pendingOrder.id, { ...pendingOrder, produtos: newProdutos });
        } else {
          // Se não existe, adiciona novo produto com tamanho
          const newProdutos = [
            ...pendingOrder.produtos,
            { produtoId: product.id, quantidade: 1, tamanho: selectedSize }
          ];
          await updateOrder(pendingOrder.id, { ...pendingOrder, produtos: newProdutos });
        }
      } else {
        alert('Nenhum pedido pendente encontrado.');
        return;
      }
      alert(`${product.nome} (${selectedSize}) foi adicionado ao carrinho!`);
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
            Selecione o tamanho:
            <select
              value={selectedSize}
              onChange={e => setSelectedSize(e.target.value)}
              style={{ marginLeft: 8, padding: 4 }}
            >
              <option value="">Selecione</option>
              {availableSizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
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
