export interface TabItem {
  key: string;
  label: string;
  children: React.ReactNode;
}

export interface TabsProps {
  id?: string;
  className?: string;
  items: TabItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
}
