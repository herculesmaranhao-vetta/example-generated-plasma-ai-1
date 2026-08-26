import { Tag as AntTag } from "antd";
import React from "react";
import type { TagProps } from "./Tag.types";

export const Tag: React.FC<TagProps> = ({ id, className, label, color }) => (
  <AntTag id={id} className={`ds-tag ${className ?? ""}`} color={color}>
    {label}
  </AntTag>
);