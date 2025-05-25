export interface Product {
    id: number,
    nome: string,
    preco: number,
    imagem: string,
    colecaoId: number,
    quantidade_estoque: number, 
    quantidade_vendida: number;
}

export interface Collection {
    id: number,
    nome: string,
    descricao: string,
    imagem: string
}

export interface Order {
    id: String,
    status: string,
    valor_total: number,
    produtos: {
        produtoId: number,
        quantidade: number,
        tamanho: string
    }[];
}