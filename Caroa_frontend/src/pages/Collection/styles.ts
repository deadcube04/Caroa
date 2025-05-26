import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 4rem auto 2rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  line-height: 1.7;
  text-align: center;
`;