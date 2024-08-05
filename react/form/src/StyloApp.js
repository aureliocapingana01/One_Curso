import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  width: 550px;
  margin: auto;
  padding: 1em 2em;
`;
export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 50px;
  `;
export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  outline-style: none;
  border-style: none;
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #2024;
  border: none;
  &:hover {
    background-color: #2029;
  }
`;
