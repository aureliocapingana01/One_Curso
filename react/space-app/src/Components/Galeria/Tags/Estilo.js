import styled from "styled-components";

export const TagTitulo = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;
export const Tag = styled.button`
  font-size: 20px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid transparent;
  
  &:hover {
    border-color: #c98cf1;
    background: rgba(220, 220, 220, 0.1);
  }
`;
export const TagDiv = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  margin: 20px 0;
`;
