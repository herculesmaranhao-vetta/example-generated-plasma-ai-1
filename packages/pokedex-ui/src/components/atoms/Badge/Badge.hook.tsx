import { useCallback, useState } from "react";

export function useBadge() {
  const [visible, setVisible] = useState(true);
  const hide = useCallback(() => setVisible(false), []);
  return { visible, hide };
}