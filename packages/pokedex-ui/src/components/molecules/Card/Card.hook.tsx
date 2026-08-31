export function useCard(onClick?: () => void): { handleClick: () => void } {
  const handleClick = () => onClick?.();
  return { handleClick };
}
