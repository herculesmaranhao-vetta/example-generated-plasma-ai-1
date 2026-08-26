export interface CardProps {
  id?: string;
  className?: string;
  image?: { src: string; alt: string };
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
