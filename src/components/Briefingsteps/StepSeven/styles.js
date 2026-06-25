import styled from "styled-components";
import { PiInfoLight } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: clamp(16px, 4vw, 40px);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: clamp(20px, 5vw, 50px);
`;

export const DescriptionStep = styled.h3`
  font-size: clamp(14px, 2vw, 19px);
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h2`
  margin-top: 20px;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  line-height: 1.2;
`;

export const SubTitle = styled.h3`
  font-size: clamp(13px, 2vw, 16px);
  font-weight: 400;
  color: #94a3b8;
  max-width: 500px;
  line-height: 1.5;
  margin-bottom: 20px;
  letter-spacing: 0.5px;
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
`;

export const ReviewCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background-color: #080918;
  transition: 0.2s ease;

  &:hover {
    border-color: rgba(108, 92, 231, 0.5);
  }

  span {
    font-size: 14px;
    color: #f5f7fa;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;

export const EditLink = styled.button`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    opacity: 1;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Important = styled.div`
  font-size: clamp(13px, 2vw, 16px);
  font-weight: 400;
  color: #f5f5f5;
  line-height: 1.5;
  letter-spacing: 0.5px;
  background-color: #3b83f618;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #3b83f667;
  width: 100%;
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TextImportant = styled.div`
display: flex;
`;

export const Icon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const Attention = styled(PiInfoLight)`
  font-size: 30px;
  color: #f6da3b;
`;

export const Send = styled(SiMinutemailer)`
  padding-left: 8px;
  font-size: 30px;
`;

export const Pencil = styled(HiOutlinePencilSquare)`
  padding-right: 8px;
  font-size: 30px;
  color: #3b82f6;
`;