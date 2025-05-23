import { useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Garante que o contêiner ocupe toda a altura da tela */
  padding: 2rem;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

const CartItemPrice = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
`;

const FinalizeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.terciary};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    transform: scale(0.98);
  }
`;

export function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Camisa Branca', price: 'R$ 50,00', quantity: 1 },
    { id: 2, title: 'Vestido Florido', price: 'R$ 80,00', quantity: 2 },
  ]);

  const handleFinalize = () => {
    alert('Compra finalizada com sucesso!');
    setCartItems([]); // Limpa o carrinho após finalizar
  };

  return (
    <CartContainer>
      {cartItems.map((item) => (
        <CartItem key={item.id}>
          <CartItemDetails>
            <CartItemTitle>{item.title}</CartItemTitle>
            <CartItemPrice>{item.price}</CartItemPrice>
          </CartItemDetails>
          <p>Quantidade: {item.quantity}</p>
        </CartItem>
      ))}
      {cartItems.length > 0 && (
        <FinalizeButton onClick={handleFinalize}>Finalizar Compra</FinalizeButton>
      )}
      {cartItems.length === 0 && <p>Seu carrinho está vazio.</p>}
    </CartContainer>
  );
}
