import styled from "styled-components";

export const Head = styled.h1`
  text-align: center;
  margin-bottom: 12px;
`;

export const Container = styled.div`
  text-align: center;
  display: block;
`;

export const Button = styled.button`
  text-align: center;
  width: 120px;
  height: 30px;
  margin-top: 5px;
  background-color: gray;
  color: white;
  cursor: pointer;
  border-radius: 18px;
  margin-bottom: 20px;

  &:disabled {
    cursor: not-allowed;
  }
`;
