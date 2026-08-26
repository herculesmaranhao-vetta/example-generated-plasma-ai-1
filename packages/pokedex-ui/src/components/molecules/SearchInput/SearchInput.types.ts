export interface SearchInputProps {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  debounceMs?: number;
  onChange?: (value: string) => void;
}
