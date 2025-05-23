import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.complemt};
  padding: 20px;
  text-align: center;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterNav = styled.nav`
  margin-top: 10px;

  a {
    color: ${({ theme }) => theme.colors.complemt};
    margin: 0 10px;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
