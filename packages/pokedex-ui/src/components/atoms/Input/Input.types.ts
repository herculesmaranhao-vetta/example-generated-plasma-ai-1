export interface InputProps {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  allowClear?: boolean;
  readOnly?: boolean;
  enabled?: boolean;
  prefix?: React.ReactNode;
}
