export interface AvatarProps {
  id?: string;
  className?: string;
  src?: string;
  text?: string;
  icon?: React.ReactNode;
  shape?: 'rounded' | 'square';
  size?: number;
}
