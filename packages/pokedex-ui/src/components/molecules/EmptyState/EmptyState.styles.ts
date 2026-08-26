import styled from 'styled-components';

export const StyledEmptyState = styled.div`
  &.ds-empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 24px;
    text-align: center;

    .ds-empty-state-title {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 4px;
    }

    .ds-empty-state-desc {
      font-size: 14px;
      color: #888;
      margin: 0;
    }
  }
`;
