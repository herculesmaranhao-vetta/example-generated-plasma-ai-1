export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
}
