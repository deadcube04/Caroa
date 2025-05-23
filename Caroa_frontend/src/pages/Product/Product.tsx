import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const ProductContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProductImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductDetails = styled.div`
  text-align: center;
`;

const ProductTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const ProductDescription = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
`;

const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.terciary};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SizeSelector = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.terciary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`;

export function Product() {
  const { title } = useParams<{ title: string }>();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');

  const handleAddToCart = () => {
    alert(`Adicionado ${quantity} unidade(s) de ${title} (Tamanho: ${size}) ao carrinho!`);
  };

  return (
    <ProductContainer>
      <ProductImage src={`/src/assets/${(title ?? 'default').toLowerCase()}.jpg`} alt={title ?? 'Produto'} />
      <ProductDetails>
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>Modelo: {title} - Quantidade disponível: 10</ProductDescription>
        <SizeSelector value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="PP">PP</option>
          <option value="P">P</option>
          <option value="M">M</option>
          <option value="G">G</option>
          <option value="GG">GG</option>
        </SizeSelector>
      </ProductDetails>
      <AddToCartContainer>
        <QuantityInput
          type="number"
          min="1"
          max="10"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <AddToCartButton onClick={handleAddToCart}>Adicionar ao Carrinho</AddToCartButton>
      </AddToCartContainer>
    </ProductContainer>
  );
}
