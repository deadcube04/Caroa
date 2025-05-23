import { api } from "./index";

import type { Product } from "../../@types/index";

export const getProducts = async () => {
  try {
    const response = await api.get<Product[]>("/produto");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await api.get<Product>(`/produto/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const updateProduct = async (id: number, product: Product) => {
  try {
    const response = await api.put<Product>(`/produto/${id}`, product);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};
