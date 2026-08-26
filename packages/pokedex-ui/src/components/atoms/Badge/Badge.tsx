import { Badge as AntBadge } from "antd";
import React from "react";
import type { BadgeProps } from "./Badge.types";

export const Badge: React.FC<BadgeProps> = ({
  id,
  className,
  count,
  status,
  showZero,
  children,
}) => (
  <AntBadge
    id={id}
    className={`ds-badge ${className ?? ""}`}
    count={count}
    status={status}
    showZero={showZero}
  >
    {children}
  </AntBadge>
);