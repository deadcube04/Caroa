import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 6rem auto 3rem auto;
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
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  margin-bottom: 1.5rem;
  text-align: center;
  text-decoration: underline;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
  text-align: justify;
`;
