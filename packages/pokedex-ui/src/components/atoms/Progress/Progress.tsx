import { Progress as AntProgress } from "antd";
import React, { useMemo } from "react";
import type { ProgressProps } from "./Progress.types";

const getStatColor = (value: number, max: number): string => {
  const pct = (value / max) * 100;
  if (pct < 25) return "#E3000F";
  if (pct < 50) return "#FAAD14";
  return "#52C41A";
};

export const Progress: React.FC<ProgressProps> = ({
  id,
  className,
  label,
  value,
  max = 255,
  color,
}) => {
  const pct = useMemo(() => Math.round((value / max) * 100), [value, max]);
  const barColor = color ?? getStatColor(value, max);

  return (
    <div id={id} className={`ds-progress ${className ?? ""}`}>
      {label && <span className="ds-progress-label">{label}</span>}
      <AntProgress
        percent={pct}
        strokeColor={barColor}
        showInfo={true}
        size="small"
      />
    </div>
  );
};