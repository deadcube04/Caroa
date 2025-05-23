import * as S from './styles.ts';

export function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <p>&copy; 2025 Caroa. Todos os direitos reservados.</p>
        <S.FooterNav>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Contato</a>
        </S.FooterNav>
      </S.FooterContent>
    </S.FooterContainer>
  );
}
