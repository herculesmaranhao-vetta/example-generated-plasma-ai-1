import { Skeleton as AntSkeleton } from "antd";
import React from "react";
import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton: React.FC<SkeletonProps> = ({
  id,
  className,
  width,
  height,
  count = 1,
}) => (
  <div id={id} className={`ds-skeleton ${className ?? ""}`} style={{ width, height }}>
    <AntSkeleton active paragraph={{ rows: count }} />
  </div>
);