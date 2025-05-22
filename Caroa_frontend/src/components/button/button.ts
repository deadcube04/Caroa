import styled from 'styled-components';
import type { ThemeColor } from '../../theme/theme';

export const StyledButton = styled.button<{ color: ThemeColor }>`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => props.theme.colors[props.color]};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;