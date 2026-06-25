import styled from 'styled-components';
import { FaArrowRight } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;

  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

export const DescriptionStep = styled.h3`
  font-size: 19px;
  color: ${({ theme }) => theme.colors.accent};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  line-height: 1.2;
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #94a3b8;
  max-width: 500px;
  line-height: 1.5;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const FlexLabel = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const DoubleLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 17px;

  input {
    margin-top: 10px;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;

    padding: 12px;

    background-color: #080918;
    color: #f5f7fa;

    font-size: 16px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
    }

      @media (max-width: 480px) {
    font-size: 16px;
  }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
  letter-spacing: 0.5px;
  font-size: 17px;

  input {
    margin-top: 10px;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 12px;
    background-color: #080918;
    color: #f5f7fa;
    font-size: 16px;
      letter-spacing: 0.5px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
    }
  }

    @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  gap: 8px;

  @media (max-width: 480px) {
    justify-content: stretch;

    button {
      width: 100%;
    }
  }
`;

export const ArrowRight = styled(FaArrowRight)`
  padding-left: 8px;
  font-size: 18px;
`;