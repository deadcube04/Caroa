import { FiShoppingBag } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import * as S from "./Navbar.ts";

export function Navbar() {
  const location = useLocation();
  return (
    <S.NavbarContainer>
      <S.NavLink to="/" $active={location.pathname === "/"}>
        <S.LogoContainer>
          <img src="./src/assets/logo-home.png" alt="Site Logo" />
        </S.LogoContainer>
      </S.NavLink>
      <S.LinksContainer>
        <S.NavLink to="/" $active={location.pathname === "/"}>Início</S.NavLink>
        <S.NavLink to="/produtos" $active={location.pathname === "/produtos"}>Produtos</S.NavLink>
        <S.NavLink to="/colecoes" $active={location.pathname === "/colecoes"}>Coleções</S.NavLink>
        <S.NavLink to="/sobre" $active={location.pathname === "/sobre"}>Sobre</S.NavLink>
      </S.LinksContainer>
      <S.RightContainer>
        <S.CartIcon>
          <S.NavLink to="/carrinho" $active={location.pathname === "/carrinho"}>
            <FiShoppingBag title="Meu carrinho"/> 
          </S.NavLink>
        </S.CartIcon>
      </S.RightContainer>
    </S.NavbarContainer>
  );
}
