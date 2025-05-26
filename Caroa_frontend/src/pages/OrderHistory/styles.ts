import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 5rem auto 2rem auto;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
`;

export const OrderBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  margin-bottom: 2rem;
  padding: 1.5rem;
`;

export const OrderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

export const ProductList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ProductItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;