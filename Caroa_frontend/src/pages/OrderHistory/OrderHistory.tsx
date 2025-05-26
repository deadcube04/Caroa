import { useEffect, useState } from "react";
import { getOrders } from "../../services/api/order";
import { getProductById } from "../../services/api/products";
import * as S from "./styles";

export default function OrderHistory() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const allOrders = await getOrders();
        const finished = allOrders.filter(
          (order: any) => order.status === "Concluído"
        );
        // Busca detalhes dos produtos de cada pedido
        const ordersWithProducts = await Promise.all(
          finished.map(async (order: any) => {
            const products = await Promise.all(
              order.produtos.map(async (item: any) => {
                const product = await getProductById(item.produtoId);
                return {
                  nome: product.nome,
                  preco: product.preco,
                  quantidade: item.quantidade,
                  tamanho: item.tamanho,
                };
              })
            );
            return { ...order, products };
          })
        );
        setOrders(ordersWithProducts);
      } catch (error) {
        setOrders([]);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) return <S.Container>Carregando histórico...</S.Container>;
  if (!orders.length)
    return <S.Container>Nenhum pedido concluído encontrado.</S.Container>;

  return (
    <S.Container>
      <h1>Histórico de Pedidos</h1>
      {orders.map((order) => (
        <S.OrderBox key={order.id}>
          <S.OrderTitle>Pedido #{order.id}</S.OrderTitle>
          <p>
            <b>Status:</b> {order.status}
          </p>
          <p>
            <b>Valor Total:</b> R$ {order.valor_total.toFixed(2)}
          </p>
          <S.ProductList>
            {order.products.map((prod: any, idx: number) => (
              <S.ProductItem key={idx}>
                {prod.nome} - {prod.quantidade}x R$ {prod.preco.toFixed(2)}{" "}
                <b>Tam:</b> {prod.tamanho}
              </S.ProductItem>
            ))}
          </S.ProductList>
        </S.OrderBox>
      ))}
    </S.Container>
  );
}
