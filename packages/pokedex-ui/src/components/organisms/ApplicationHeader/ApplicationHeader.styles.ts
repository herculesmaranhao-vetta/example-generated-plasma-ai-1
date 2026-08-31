import styled from "styled-components";

export const StyledApplicationHeader = styled.header`
  &.ds-application-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    height: 48px;
    background: #1a1a1a;
    color: #ffffff;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .ds-application-header-leading {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ds-application-header-nav-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    color: #ffffff;
    cursor: pointer;
    font-size: 14px;
  }

  .ds-application-header-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }

  .ds-application-header-product-name {
    font-size: 15px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1;
    cursor: pointer;
  }

  .ds-application-header-trailing {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .ds-application-header-divider {
    width: 1px;
    height: 16px;
    background: rgba(255, 255, 255, 0.15);
    margin: 0 4px;
  }

  .ds-application-header-avatar-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #666;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 2px;
  }
`;
