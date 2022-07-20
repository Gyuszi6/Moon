import styled from "styled-components";

export const RegistrationPageContainer = styled.div`
  background-color: gray;
  margin-top: 100px;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const CodePageContainer = styled.div`
  margin-top: 100px;
`;

export const Head = styled.h1`
  text-align: center;
  margin-bottom: 12px;
`;

export const Container = styled.div`
  text-align: center;
  display: block;
`;

export const InputBox = styled.div`
  display: block;
`;

export const SelectBox = styled.div`
  display: block;
`;

export const Label = styled.label`
  font-size: 12px;
`;

export const Input = styled.input`
  width: 330px;
  height: 25px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3px;
  margin-bottom: 10px;
  display: block;
  font-size: 12px;
`;

export const DateText = styled.p`
  margin-bottom: 5px;
  font-size: 13px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 375px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  display: block;
  height: 30px;
  width: 50px;
`;

export const DaySelect = styled.select`
  display: block;
  width: 200px;
  height: 30px;
`;

export const SelectLabel = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 2px;
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

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  position: relative;
  right: 40px;
`;

export const TermsLabel = styled.label`
  position: relative;
  right: 35px;
  font-size: 12px;
`;

export const CheckBoxContainer = styled.div`
  margin-bottom: 20px;
`;
