import { useCallback, useState } from "react";

export function useBadge(): Record<string, never> {
  const [visible, setVisible] = useState(true);
  const hide = useCallback(() => setVisible(false), []);
  return { visible, hide };
}