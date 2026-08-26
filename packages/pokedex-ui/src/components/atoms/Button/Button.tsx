import React from "react";
import { useButton } from "./Button.hook";
import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  id,
  className,
  label,
  variant = "GHOST",
  icon,
  loading = false,
  enabled = true,
  onClick,
}) => {
  const { handleClick, handleMouseEnter, handleMouseLeave } = useButton(onClick);

  return (
    <StyledButton
      id={id}
      className={`ds-button ds-button-${variant.toLowerCase()} ${className ?? ""}`}
      $variant={variant}
      disabled={!enabled || loading}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {loading && <span className="ds-button-spinner" />}
      {icon && !loading && icon}
      {label}
    </StyledButton>
  );
};