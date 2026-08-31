import React from "react";
import { StyledApplicationHeader } from "./ApplicationHeader.styles";
import { Icon } from "@/components/atoms/Icon";
import type { ApplicationHeaderProps } from "./ApplicationHeader.types";

export const ApplicationHeader: React.FC<ApplicationHeaderProps> = ({
  id,
  className,
  variant = "SINGLE_PRODUCT",
  productName,
  productLogo,
  userInitials,
  showFullscreenToggle = true,
  trailingActions,
}) => (
  <StyledApplicationHeader
    id={id}
    className={`ds-application-header ${className ?? ""}`}
  >
    <div className="ds-application-header-leading">
      <span className="ds-application-header-nav-icon">
        <Icon name={variant === "MULTI_PLATFORM" ? "apps" : "home"} />
      </span>
      {productLogo && <span className="ds-application-header-logo">{productLogo}</span>}
      <span className="ds-application-header-product-name">{productName}</span>
    </div>
    <div className="ds-application-header-trailing">
      {trailingActions}
      {showFullscreenToggle && (
        <>
          <span className="ds-application-header-divider" />
          <span className="ds-application-header-avatar-trigger">
            {userInitials ?? "U"}
          </span>
        </>
      )}
    </div>
  </StyledApplicationHeader>
);
