import { useCallback, useState } from "react";

export function useButton(onClick?: () => void) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return { isHovered, handleClick, handleMouseEnter, handleMouseLeave };
}