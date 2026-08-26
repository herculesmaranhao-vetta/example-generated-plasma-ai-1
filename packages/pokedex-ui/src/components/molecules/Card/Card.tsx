import { Card as AntCard } from "antd";
import React from "react";
import { StyledCard } from "./Card.styles";
import type { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({
  id,
  className,
  image,
  title,
  subtitle,
  children,
  onClick,
}) => (
  <StyledCard
    id={id}
    className={`ds-card ${className ?? ""}`}
    hoverable={!!onClick}
    onClick={onClick}
    cover={
      image ? (
        <img alt={image.alt} src={image.src} loading="lazy" />
      ) : undefined
    }
  >
    {title && <AntCard.Meta title={title} description={subtitle} />}
    {children}
  </StyledCard>
);