import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StepInfo = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
`;

export const SubTitle = styled.p`
  font-size: 16px;
  color: #94a3b8;
  max-width: 600px;
`;

export const FormContainer = styled.div`
  width: 100%;
`;