import React from 'react';
import { StyledButton } from './button.ts';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  color?: String; // Atualizado para corresponder ao StyledButton
  font?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className = '', color = 'primary', font }) => {
  return (
    <StyledButton
      onClick={onClick}
      className={className}
      color={color} // Agora tipado corretamente
      style={{ fontSize: font }}
    >
      {label}
    </StyledButton>
  );
};

export default Button;