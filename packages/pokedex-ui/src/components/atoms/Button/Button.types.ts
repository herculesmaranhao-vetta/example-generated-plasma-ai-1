export type ButtonVariant = 'PRIMARY' | 'SECONDARY' | 'DANGER' | 'WARNING' | 'GHOST' | 'LINK';

export interface ButtonProps {
  id?: string;
  className?: string;
  label: string;
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  loading?: boolean;
  enabled?: boolean;
  onClick?: () => void;
}
