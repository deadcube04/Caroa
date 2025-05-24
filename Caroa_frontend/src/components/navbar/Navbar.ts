import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.terciary};
  padding: 0.5rem;
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${({ $active, theme }) => $active ? theme.colors.secondary : theme.colors.primary};
  text-decoration: none;
  font-size: 1.2rem;
  margin: 0 1rem;
  font-weight: 600;
  border-bottom: ${({ $active, theme }) => $active ? `2px solid ${theme.colors.secondary}` : 'none'};
  transition: color 0.2s, border-bottom 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const LoginButton = styled.button`
  background-color: #f0a500;
  color: #333;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 2rem;

  &:hover {
    background-color: #d18e00;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 4rem;
    width: auto;
  }
`;

export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 2rem;
`;