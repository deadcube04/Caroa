import { FiShoppingBag } from "react-icons/fi";
import * as S from "./Navbar.ts";

export function Navbar() {
  return (
    <S.NavbarContainer>
      <S.NavLink to="/">
        <S.LogoContainer>
          <img src="./src/assets/logo-home.png" alt="Site Logo" />
        </S.LogoContainer>
      </S.NavLink>
      <S.LinksContainer>
        <S.NavLink to="/">Início</S.NavLink>
        <S.NavLink to="/produtos">Produtos</S.NavLink>
        <S.NavLink to="/colecoes">Coleções</S.NavLink>
        <S.NavLink to="/sobre">Sobre</S.NavLink>
      </S.LinksContainer>
      <S.RightContainer>
        <S.CartIcon>
          <S.NavLink to="/carrinho">
            <FiShoppingBag title="Meu carrinho"/> 
          </S.NavLink>
        </S.CartIcon>
      </S.RightContainer>
    </S.NavbarContainer>
  );
}
