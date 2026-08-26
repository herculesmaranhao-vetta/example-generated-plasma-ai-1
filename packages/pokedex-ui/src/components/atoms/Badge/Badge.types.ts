export interface BadgeProps {
  id?: string;
  className?: string;
  count?: number | string;
  status?: 'success' | 'error' | 'warning' | 'processing' | 'default';
  showZero?: boolean;
  children?: React.ReactNode;
}
