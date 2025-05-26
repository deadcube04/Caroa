import styled from 'styled-components';

export const CardGrid = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top: .0rem;  
  div {
  margin-bottom: 1rem;}
`;

export const HomeContainer = styled.div`
  text-align: center;
  padding-top: 2.5rem;
  
    h2 {
    padding: 1rem;
      font-size: ${({ theme }) => theme.font.sizes.large};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;