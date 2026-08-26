import { useNavigate } from "react-router-dom";

export function useCard(onClick?: () => void) {
  const navigate = useNavigate();
  const handleClick = () => onClick?.();
  return { handleClick };
}