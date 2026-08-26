import { Input as AntInput } from "antd";
import React from "react";
import type { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  id,
  className,
  value,
  placeholder,
  onChange,
  allowClear,
  readOnly,
  enabled = true,
  prefix,
}) => (
  <AntInput
    id={id}
    className={`ds-input ${className ?? ""}`}
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange?.(e.target.value)}
    allowClear={allowClear}
    readOnly={readOnly}
    disabled={!enabled}
    prefix={prefix}
    size="middle"
  />
);