import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    background: ${({ theme }) => theme.colors.accent};
    filter: blur(160px);
    opacity: 0.08;
    top: -200px;
    left: -200px;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    background: ${({ theme }) => theme.colors.accent};
    filter: blur(180px);
    opacity: 0.06;
    bottom: -200px;
    right: -200px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 520px;
  padding: 0 20px;
  animation: ${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Logo = styled.div`
  img {
    width: 42px;
    height: 42px;
    object-fit: contain;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`;

export const TitleHeader = styled.h1`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #f5f5f5;
`;

export const SubTitleHeader = styled.h2`
  font-size: 13px;
  font-weight: 400;
  color: #94a3b8;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin-bottom: 50px;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
`;

export const Badge = styled.div`
  font-size: 12px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
`;

export const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  font-weight: 600;
  color: #f5f5f5;
  letter-spacing: -0.6px;
  line-height: 1.2;
`;

export const SubTitle = styled.h3`
  font-size: 15px;
  font-weight: 400;
  color: #94a3b8;
  max-width: 420px;
  line-height: 1.6;
`;

export const End = styled.div`
  margin-top: 70px;
  width: 100%;
`;

export const Progress = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.accent},
      transparent
    );

    animation: shimmer 1.4s infinite linear;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(300%);
    }
  }
`;

export const Loading = styled.h3`
  font-size: 13px;
  font-weight: 400;
  color: #94a3b8;
  text-align: center;
  letter-spacing: 0.5px;
  margin-top: 15px;
`;