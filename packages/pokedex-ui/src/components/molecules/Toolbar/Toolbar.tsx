import React from "react";
import { StyledToolbar } from "./Toolbar.styles";
import type { ToolbarProps } from "./Toolbar.types";

export const Toolbar: React.FC<ToolbarProps> = ({ id, className, children }) => (
  <StyledToolbar id={id} className={`ds-toolbar ${className ?? ""}`}>
    {children}
  </StyledToolbar>
);