import styled from 'styled-components';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Select from 'react-select';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: clamp(16px, 4vw, 40px);
`;

export const Form = styled.form`
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

export const Label = styled.label`
  margin-top: 25px;
  letter-spacing: 0.5px;
  font-size: 17px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ArrowLeft = styled(FaArrowLeft)`
  padding-right: 8px;
  font-size: 18px;
`;

export const ArrowRight = styled(FaArrowRight)`
  padding-left: 8px;
  font-size: 18px;
`;

export const CustomSelect = styled(Select)`
  margin-top: 10px;

  .react-select__control {
    background-color: #080918 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-radius: 8px;
    min-height: 48px;
    box-shadow: none;
    transition: 0.2s ease;
  }

  .react-select__control:hover {
    border-color: ${({ theme }) => theme.colors.accent} !important;
  }

  .react-select__control--is-focused {
    border-color: ${({ theme }) => theme.colors.accent} !important;
    box-shadow: 0 0 0 2px rgba(108, 92, 231, 0.15) !important;
  }

  .react-select__value-container {
    padding: 0 12px;
  }

  .react-select__single-value,
  .react-select__input-container {
    color: #f5f7fa;
  }

  .react-select__placeholder {
    color: #94a3b8;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__dropdown-indicator {
    color: #94a3b8;
    transition: 0.2s;
  }

  .react-select__dropdown-indicator:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  .react-select__menu {
    background-color: #080918;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    margin-top: 6px;
    overflow: hidden;
    z-index: 10;
  }

  .react-select__menu-list {
    max-height: 200px;
    overflow-y: auto;
  }

  .react-select__menu-list::-webkit-scrollbar {
    width: 6px;
  }

  .react-select__menu-list::-webkit-scrollbar-track {
    background: #080918;
  }

  .react-select__menu-list::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 10px;
  }

  .react-select__menu-list {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.accent} #080918;
  }

  .react-select__option {
    background-color: transparent;
    color: #f5f7fa;
    cursor: pointer;
    padding: 12px;
  }

  .react-select__option--is-focused {
    background-color: rgba(108, 92, 231, 0.15);
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.accent};
    color: #fff;
  }

  .react-select__multi-value {
    background-color: rgba(108, 92, 231, 0.15);
    border-radius: 6px;
  }

  .react-select__multi-value__label {
    color: #f5f7fa;
    font-size: 13px;
  }

  .react-select__multi-value__remove {
    color: #f5f7fa;
  }

  .react-select__multi-value__remove:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 10px;
  width: 100%;
  min-height: 80px;
  resize: none;
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 12px;
  background-color: #080918;
  color: #f5f7fa;
  font-size: 15px;
  letter-spacing: 0.5px;

  ::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.accent} #080918;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #080918;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
  }
`;