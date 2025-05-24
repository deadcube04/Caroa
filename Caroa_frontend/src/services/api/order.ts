import { api } from "./index";
import type { Order } from "../../@types/index";

export const getOrders = async () => {
  try {
    const response = await api.get<Order[]>("/pedido");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

export const getOrderById = async (id: String) => {
  try {
    const response = await api.get<Order>(`/pedido/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    throw error;
  }
};

export const updateOrder = async (id: String, order: Order) => {
  try {
    const response = await api.put<Order>(`/pedido/${id}`, order);
    return response.data;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error;
  }
};

export const createOrder = async (order: Order) => {
  try {
    const response = await api.post<Order>("/pedido", order);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export const getPendingOrder = async (): Promise<Order | null> => {
  try {
    const response = await api.get<Order[]>('/pedido');
    const pendingOrder = response.data.find(order => order.status === 'Pendente');
    return pendingOrder || null;
  } catch (error) {
    console.error('Error fetching pending order:', error);
    throw error;
  }
};
