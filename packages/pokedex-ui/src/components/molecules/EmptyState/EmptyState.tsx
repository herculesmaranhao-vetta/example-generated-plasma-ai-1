import { Empty } from "antd";
import React from "react";
import { StyledEmptyState } from "./EmptyState.styles";
import type { EmptyStateProps } from "./EmptyState.types";

export const EmptyState: React.FC<EmptyStateProps> = ({
  id,
  className,
  icon,
  title,
  description,
  action,
}) => (
  <StyledEmptyState
    id={id}
    className={`ds-empty-state ${className ?? ""}`}
  >
    <Empty
      image={icon || Empty.PRESENTED_IMAGE_SIMPLE}
      description={
        <div>
          <p className="ds-empty-state-title">{title}</p>
          {description && <p className="ds-empty-state-desc">{description}</p>}
        </div>
      }
    >
      {action}
    </Empty>
  </StyledEmptyState>
);