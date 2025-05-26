import { useEffect, useState } from "react";
import {
  getPendingOrder,
  updateOrder,
  createOrder,
} from "../../services/api/order";
import { getProductById, updateProduct } from "../../services/api/products";
import { FaRegTrashAlt, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export function Cart() {
  const [cartItems, setCartItems] = useState<
    {
      id: number;
      title: string;
      price: number;
      quantity: number;
      size?: string;
    }[]
  >([]);
  const [totalValue, setTotalValue] = useState(0);
  const [pendingOrderId, setPendingOrderId] = useState<String | null>(null);
  const navigate = useNavigate();

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
                size: item.tamanho,
              };
            })
          );
          setCartItems(products);
          const total = products.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
          );
          setTotalValue(total);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do carrinho:", error);
      }
    }
    fetchCartData();
  }, []);

  const handleRemove = async (productId: number, size?: string) => {
    if (!pendingOrderId) return;
    try {
      // Remove do front
      const newCartItems = cartItems.filter(
        (item) => !(item.id === productId && item.size === size)
      );
      setCartItems(newCartItems);
      const newTotal = newCartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setTotalValue(newTotal);
      // Remove da API
      const pendingOrder = await getPendingOrder();
      if (pendingOrder) {
        const newProdutos = pendingOrder.produtos.filter(
          (p) => !(p.produtoId === productId && p.tamanho === size)
        );
        await updateOrder(pendingOrderId, {
          ...pendingOrder,
          produtos: newProdutos,
        });
      }
    } catch (error) {
      console.error("Erro ao remover produto do pedido:", error);
    }
  };

  const handleFinalize = async () => {
    if (!pendingOrderId) return;
    try {
      // Atualiza o status do pedido atual para 'Concluído' e valor_total correto
      const pendingOrder = await getPendingOrder();
      if (pendingOrder) {
        // Atualiza a quantidade_vendida e quantidade_estoque de cada produto
        await Promise.all(
          pendingOrder.produtos.map(async (item) => {
            const product = await getProductById(item.produtoId);
            await updateProduct(product.id, {
              ...product,
              quantidade_vendida:
                (product.quantidade_vendida || 0) + item.quantidade,
              quantidade_estoque:
                (product.quantidade_estoque || 0) - item.quantidade,
            });
          })
        );
        const valorTotal = pendingOrder.produtos.reduce((sum, item) => {
          const cartItem = cartItems.find(
            (ci) => ci.id === item.produtoId && ci.size === item.tamanho
          );
          return sum + (cartItem ? cartItem.price * item.quantidade : 0);
        }, 0);
        await updateOrder(pendingOrder.id, {
          ...pendingOrder,
          status: "Concluído",
          valor_total: valorTotal,
        });

        const newId = Number(pendingOrder.id) + 1; // Incrementa o ID para o próximo pedido

        await createOrder({
          id: newId.toString(),
          status: "Pendente",
          valor_total: 0,
          produtos: [],
        });
      }
      setCartItems([]); // Limpa o carrinho após finalizar
      setTotalValue(0);
      window.dispatchEvent(new Event('cart-updated'));
      alert("Compra finalizada com sucesso!");
    } catch (error) {
      alert("Erro ao finalizar o pedido!");
      console.error(error);
    }
  };

  return (
    <S.CartContainer>
      {cartItems.length > 0 && (
        <>
          <div className="historico" onClick={() => navigate("/historico")}>
            <FaClock />
            <p>Ver Histórico de Pedidos</p>
          </div>
          <S.CartTable>
            <thead>
              <S.CartTableRow>
                <S.CartTableHeader>Nome</S.CartTableHeader>
                <S.CartTableHeader>Preço</S.CartTableHeader>
                <S.CartTableHeader>Quantidade</S.CartTableHeader>
                <S.CartTableHeader>Tamanho</S.CartTableHeader>
                <S.CartTableHeader></S.CartTableHeader>
              </S.CartTableRow>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <S.CartTableRow key={`${item.id}-${item.size}`}>
                  <S.CartTableCell>{item.title}</S.CartTableCell>
                  <S.CartTableCell>R$ {item.price.toFixed(2)}</S.CartTableCell>
                  <S.CartTableCell>{item.quantity}</S.CartTableCell>
                  <S.CartTableCell>{item.size}</S.CartTableCell>
                  <S.CartTableCell>
                    <FaRegTrashAlt
                      onClick={() => handleRemove(item.id, item.size)}
                    />
                  </S.CartTableCell>
                </S.CartTableRow>
              ))}
            </tbody>
          </S.CartTable>
          <p>Total: R$ {totalValue.toFixed(2)}</p>
          <S.FinalizeButton onClick={handleFinalize}>
            Finalizar Compra
          </S.FinalizeButton>
        </>
      )}
      {cartItems.length === 0 && (
        <>
          <p>Seu carrinho está vazio.</p>
          <S.FinalizeButton
            style={{ marginTop: "1rem", background: "#b8860b" }}
            onClick={() => navigate("/historico")}
          >
            Ver Histórico de Pedidos
          </S.FinalizeButton>
        </>
      )}
    </S.CartContainer>
  );
}
