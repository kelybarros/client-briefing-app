import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const BarWrapper = styled.div`
  width: 50%;
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Step = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
  background: ${({ $completed, $active }) =>
    $active ? "#3b83f6" :
    $completed ? "#3b83f680" :
    "#e5e7eb"};
  color: ${({ $completed, $active }) =>
    $active || $completed ? "white" : "#6b7280"};
  transform: ${({ $active }) => $active ? "scale(1.1)" : "scale(1)"};

  &:hover {
    transform: scale(1.15);
  }
`;

export const Line = styled.div`
  flex: 1;
  height: 3px;
  margin: 0 8px;
  background: ${({ $completed }) =>
    $completed ? "#3b83f6" : "#e5e7eb"};
  transition: 0.3s ease;
  border-radius: 999px;
`;