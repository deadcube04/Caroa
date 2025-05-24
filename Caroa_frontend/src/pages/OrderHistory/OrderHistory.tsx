import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getOrders } from '../../services/api/order';
import { getProductById } from '../../services/api/products';

const Container = styled.div`
  max-width: 900px;
  margin: 5rem auto 2rem auto;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
`;

const OrderBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 1.5rem;
`;

const OrderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProductItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function OrderHistory() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const allOrders = await getOrders();
        const finished = allOrders.filter((order: any) => order.status === 'Concluído');
        // Busca detalhes dos produtos de cada pedido
        const ordersWithProducts = await Promise.all(finished.map(async (order: any) => {
          const products = await Promise.all(order.produtos.map(async (item: any) => {
            const product = await getProductById(item.produtoId);
            return {
              nome: product.nome,
              preco: product.preco,
              quantidade: item.quantidade
            };
          }));
          return { ...order, products };
        }));
        setOrders(ordersWithProducts);
      } catch (error) {
        setOrders([]);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) return <Container>Carregando histórico...</Container>;
  if (!orders.length) return <Container>Nenhum pedido concluído encontrado.</Container>;

  return (
    <Container>
      <h1>Histórico de Pedidos</h1>
      {orders.map((order) => (
        <OrderBox key={order.id}>
          <OrderTitle>Pedido #{order.id}</OrderTitle>
          <p><b>Status:</b> {order.status}</p>
          <p><b>Valor Total:</b> R$ {order.valor_total.toFixed(2)}</p>
          <ProductList>
            {order.products.map((prod: any, idx: number) => (
              <ProductItem key={idx}>
                {prod.nome} - {prod.quantidade}x R$ {prod.preco.toFixed(2)}
              </ProductItem>
            ))}
          </ProductList>
        </OrderBox>
      ))}
    </Container>
  );
}
