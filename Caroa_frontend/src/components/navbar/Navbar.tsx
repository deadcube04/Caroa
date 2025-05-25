import { FiShoppingBag } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import * as S from "./Navbar.ts";
import { useCart } from "../../context/CartContext";

export function Navbar() {
  const location = useLocation();
  const { cartCount } = useCart();

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
        <S.CartIcon style={{ position: 'relative' }}>
          <S.NavLink to="/carrinho" $active={location.pathname === "/carrinho"}>
            <FiShoppingBag title="Meu carrinho"/>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: -8,
                right: -8,
                background: '#CE4F2B',
                color: '#fff',
                borderRadius: '50%',
                fontSize: '0.8rem',
                width: 20,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                zIndex: 2
              }}>{cartCount}</span>
            )}
          </S.NavLink>
        </S.CartIcon>
      </S.RightContainer>
    </S.NavbarContainer>
  );
}
