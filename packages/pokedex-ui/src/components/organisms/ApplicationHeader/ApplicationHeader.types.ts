export interface ApplicationHeaderProps {
  id?: string;
  className?: string;
  variant?: "SINGLE_PRODUCT" | "MULTI_PLATFORM";
  productName: string;
  productVersion?: string;
  productLogo?: React.ReactNode;
  userInitials?: string;
  userName?: string;
  showFullscreenToggle?: boolean;
  showSettings?: boolean;
  showHelp?: boolean;
  trailingActions?: React.ReactNode;
}
