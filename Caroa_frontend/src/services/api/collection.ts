import { api } from "./index";

import type { Collection } from "../../@types/index";

export const getCollections = async () => {
  try {
    const response = await api.get<Collection[]>("/colecao");
    return response.data;
  } catch (error) {
    console.error("Error fetching collections:", error);
    throw error;
  }
};

export const getCollectionById = async (id: number) => {
    try {
        const response = await api.get<Collection>(`/colecao/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching collection by ID:", error);
        throw error;
    }
    };