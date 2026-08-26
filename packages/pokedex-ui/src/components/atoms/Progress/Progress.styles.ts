import styled from 'styled-components';

export const StyledProgressWrapper = styled.div`
  &.ds-progress {
    display: flex;
    align-items: center;
    gap: 8px;

    .ds-progress-label {
      min-width: 80px;
      font-weight: 500;
      font-size: 14px;
    }
  }
`;
