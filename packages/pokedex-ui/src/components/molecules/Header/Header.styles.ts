import styled from 'styled-components';

export const StyledHeader = styled.header`
  &.ds-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 24px;
    background: var(--color-primary);
    color: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .ds-header-left,
  .ds-header-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
