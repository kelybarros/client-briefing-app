import styled from "styled-components";

export const Button = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 2px solid #f5f5f5;
  background: #25D366;
  color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 9999;
  transition: all 0.25s ease;

  &:hover {
    transform: scale(1.12);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;