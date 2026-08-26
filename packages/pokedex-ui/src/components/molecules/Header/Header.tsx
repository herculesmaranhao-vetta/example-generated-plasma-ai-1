import React from "react";
import { StyledHeader } from "./Header.styles";
import type { HeaderProps } from "./Header.types";

export const Header: React.FC<HeaderProps> = ({ id, className, logo, actions }) => (
  <StyledHeader id={id} className={`ds-header ${className ?? ""}`}>
    <div className="ds-header-left">{logo}</div>
    <div className="ds-header-right">{actions}</div>
  </StyledHeader>
);