import styled, { css } from "styled-components";

const buttonVariants = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: #F5F7FA;
    border: none;

    &:hover {
      opacity: 0.9;
    }
  `,

  secondary: css`
    background: transparent;
    color: #F5F7FA;
    border: 1px solid rgba(255, 255, 255, 0.23);

    &:hover {
      background: #f5f7fa1b;
    }
  `,
};

export const Container = styled.button`
display: flex;
align-items: center;
justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  ${({ variant }) => buttonVariants[variant]}
`;
