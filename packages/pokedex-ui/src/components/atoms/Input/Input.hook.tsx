import { useState, useCallback } from "react";

export function useInput(): { focused: boolean; handleFocus: () => void; handleBlur: () => void } {
  const [focused, setFocused] = useState(false);
  const handleFocus = useCallback(() => setFocused(true), []);
  const handleBlur = useCallback(() => setFocused(false), []);
  return { focused, handleFocus, handleBlur };
}
