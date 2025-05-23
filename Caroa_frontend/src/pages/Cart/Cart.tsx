import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPendingOrder, updateOrder } from '../../services/api/order';
import { getProductById } from '../../services/api/products';
import { FaRegTrashAlt } from "react-icons/fa";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Garante que o contêiner ocupe toda a altura da tela */
  padding: 2rem;
`;

const CartTable = styled.table`
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const CartTableHeader = styled.th`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.terciary};
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  text-align: left;
`;

const CartTableRow = styled.tr`
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
`;

const CartTableCell = styled.td`
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.primary};
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
  const [cartItems, setCartItems] = useState<{ id: number; title: string; price: number; quantity: number; size?: string }[]>([]);
  const [totalValue, setTotalValue] = useState(0);
  const [pendingOrderId, setPendingOrderId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCartData() {
      try {
        const pendingOrder = await getPendingOrder();
        if (pendingOrder) {
          setPendingOrderId(pendingOrder.id);
          const products = await Promise.all(
            pendingOrder.produtos.map(async (item) => {
              const product = await getProductById(item.produtoId);
              return {
                id: product.id,
                title: product.nome,
                price: product.preco,
                quantity: item.quantidade,
                size: product.tamanho,
              };
            })
          );
          setCartItems(products);
          const total = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
          setTotalValue(total);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do carrinho:', error);
      }
    }
    fetchCartData();
  }, []);

  const handleRemove = async (productId: number) => {
    if (!pendingOrderId) return;
    try {
      // Remove do front
      const newCartItems = cartItems.filter(item => item.id !== productId);
      setCartItems(newCartItems);
      const newTotal = newCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setTotalValue(newTotal);
      // Remove da API
      const pendingOrder = await getPendingOrder();
      if (pendingOrder) {
        const newProdutos = pendingOrder.produtos.filter(p => p.produtoId !== productId);
        await updateOrder(pendingOrderId, { ...pendingOrder, produtos: newProdutos });
      }
    } catch (error) {
      console.error('Erro ao remover produto do pedido:', error);
    }
  };

  const handleFinalize = () => {
    alert('Compra finalizada com sucesso!');
    setCartItems([]); // Limpa o carrinho após finalizar
  };

  return (
    <CartContainer>
      {cartItems.length > 0 && (
        <>
          <CartTable>
            <thead>
              <CartTableRow>
                <CartTableHeader>Nome</CartTableHeader>
                <CartTableHeader>Preço</CartTableHeader>
                <CartTableHeader>Quantidade</CartTableHeader>
                <CartTableHeader>Tamanho</CartTableHeader>
                <CartTableHeader></CartTableHeader>
              </CartTableRow>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartTableRow key={item.id}>
                  <CartTableCell>{item.title}</CartTableCell>
                  <CartTableCell>R$ {item.price.toFixed(2)}</CartTableCell>
                  <CartTableCell>{item.quantity}</CartTableCell>
                  <CartTableCell>{item.size}</CartTableCell>
                  <CartTableCell>
                  <FaRegTrashAlt onClick={() => handleRemove(item.id)} />
                  </CartTableCell>
                </CartTableRow>
              ))}
            </tbody>
          </CartTable>
          <p>Total: R$ {totalValue.toFixed(2)}</p>
          <FinalizeButton onClick={handleFinalize}>Finalizar Compra</FinalizeButton>
        </>
      )}
      {cartItems.length === 0 && <p>Seu carrinho está vazio.</p>}
    </CartContainer>
  );
}
