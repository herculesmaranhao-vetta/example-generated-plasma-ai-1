import styled, { css } from 'styled-components';
import type { ButtonVariant } from './Button.types';

const variantStyles = {
  PRIMARY: css`
    background: var(--color-primary);
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      background: var(--color-primary-hover);
    }
  `,
  SECONDARY: css`
    background: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    &:hover:not(:disabled) {
      background: var(--color-primary);
      color: #fff;
    }
  `,
  DANGER: css`
    background: var(--color-error);
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  WARNING: css`
    background: #faad14;
    color: #fff;
    border: none;
    &:hover:not(:disabled) {
      opacity: 0.9;
    }
  `,
  GHOST: css`
    background: transparent;
    color: inherit;
    border: 1px solid transparent;
    &:hover:not(:disabled) {
      background: rgba(0, 0, 0, 0.04);
    }
  `,
  LINK: css`
    background: transparent;
    color: var(--color-primary);
    border: none;
    padding: 0;
    &:hover:not(:disabled) {
      text-decoration: underline;
    }
  `,
};

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-family, Roboto, sans-serif);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  padding: ${({ $variant }) => ($variant === 'LINK' ? '0' : '8px 16px')};
  border-radius: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  ${({ $variant }) => variantStyles[$variant]}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
