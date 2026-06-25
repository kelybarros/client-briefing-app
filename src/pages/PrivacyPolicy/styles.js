import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

export const Container = styled.main`
  min-height: 100vh;
  padding: 120px 20px 80px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 40px;
  backdrop-filter: blur(8px);
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 10px;
  color: #f5f5f5;
`;

export const UpdateDate = styled.p`
  font-size: 0.9rem;
  opacity: 0.6;
  margin-bottom: 40px;
  color: #f5f5f5;
`;

export const Section = styled.section`
  margin-bottom: 38px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 14px;
  color: #f5f5f5;
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 14px;
  opacity: 0.85;
  color: #f5f5f5;
`;

export const List = styled.ul`
  margin: 14px 0 18px 20px;
  color: #f5f5f5;

  li {
    line-height: 1.8;
    margin-bottom: 6px;
    opacity: 0.85;
  }
`;

export const ContactBox = styled.div`
  margin-top: 14px;
  padding: 14px 18px;
  border-radius: 12px;
  background: rgba(59, 131, 246, 0.08);
  border: 1px solid rgba(59, 131, 246, 0.25);
  color: #f5f5f5;
  font-weight: 500;
  word-break: break-word;
`;

export const Button = styled.button`
  margin-top: 40px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  color: #f5f5f5;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0px);
  }
`;

export const ArrowLeft = styled(FiArrowLeft)`
  font-size: 1.1rem;
`;