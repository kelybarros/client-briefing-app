import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background: rgba(5, 5, 20, 0.92);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(96, 165, 250, 0.45),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 18px 16px;
  }
`;

export const ContentTexts = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 8px;
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 0.04em;
  text-align: center;
  opacity: 0.72;
  margin: 0;

  span {
    color: ${({ theme }) => theme.colors.accentSoft};
    font-weight: 500;
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 1.5;
  }
`;

export const TextLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: 0.04em;
  text-align: center;
  opacity: 0.72;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    opacity: 1;
  }

  span {
    color: ${({ theme }) => theme.colors.accentSoft};
    font-weight: 500;
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    line-height: 1.5;
  }
`;