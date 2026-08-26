import { Select as AntSelect } from "antd";
import React from "react";
import type { SelectProps } from "./Select.types";

export const Select: React.FC<SelectProps> = ({
  id,
  className,
  value,
  placeholder,
  options,
  onChange,
}) => (
  <AntSelect
    id={id}
    className={`ds-select ${className ?? ""}`}
    value={value}
    placeholder={placeholder}
    options={options}
    onChange={(v) => onChange?.(v as string)}
    allowClear
    style={{ minWidth: 160 }}
  />
);