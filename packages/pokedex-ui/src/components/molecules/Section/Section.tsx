import React from "react";
import { StyledSection } from "./Section.styles";
import type { SectionProps } from "./Section.types";

export const Section: React.FC<SectionProps> = ({ id, className, description, children }) => (
  <StyledSection id={id} className={`ds-section ${className ?? ""}`} aria-label={description}>
    {children}
  </StyledSection>
);