import { Icon } from "@/components/atoms/Icon";
import { Input } from "@/components/atoms/Input";
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { SearchInputProps } from "./SearchInput.types";

export const SearchInput: React.FC<SearchInputProps> = ({
  id,
  className,
  value: externalValue,
  placeholder,
  debounceMs = 300,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState(externalValue ?? "");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setInternalValue(externalValue ?? "");
  }, [externalValue]);

  const handleChange = useCallback(
    (val: string) => {
      setInternalValue(val);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        onChange?.(val);
      }, debounceMs);
    },
    [debounceMs, onChange],
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Input
      id={id}
      className={`ds-search-input ${className ?? ""}`}
      value={internalValue}
      placeholder={placeholder}
      onChange={handleChange}
      allowClear
      prefix={<Icon name="search" size="sm" />}
    />
  );
};