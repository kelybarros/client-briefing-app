import styled, { keyframes } from "styled-components";

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.85) translateY(20px);
  }

  60% {
    opacity: 1;
    transform: scale(1.02) translateY(0px);
  }

  100% {
    transform: scale(1);
  }
`;

/* PULSO SUAVE DO ÍCONE */
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
`;

const checkPop = keyframes`
  0% { transform: scale(0); }
  60% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: radial-gradient(
    circle at top,
    rgba(34, 197, 94, 0.08),
    transparent 40%
  );
`;

export const Card = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 55px 45px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  text-align: center;
  animation: ${popIn} 0.6s ease forwards;
`;

export const Icon = styled.div`
  width: 95px;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(34, 197, 94, 0.12);
  border: 1px solid rgba(34, 197, 94, 0.35);
  animation: ${pulse} 2.2s infinite;

  svg {
    font-size: 44px;
    color: #22c55e;
    animation: ${checkPop} 0.5s ease;
  }
`;

export const Title = styled.h1`
  font-size: clamp(26px, 3.5vw, 36px);
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: -0.3px;
`;

export const Description = styled.p`
  max-width: 520px;
  font-size: 15.5px;
  line-height: 1.7;
  color: #94a3b8;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Button = styled.button`
  height: 48px;
  padding: 0 22px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s ease;
  border: ${({ $secondary }) =>
    $secondary ? "1px solid rgba(255,255,255,0.15)" : "none"};
  background: ${({ $secondary, theme }) =>
    $secondary ? "transparent" : theme.colors.accent};
  color: ${({ $secondary }) =>
    $secondary ? "#f5f5f5" : "#050514"};

  &:hover {
    transform: translateY(-2px);
  }
`;