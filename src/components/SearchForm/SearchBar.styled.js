import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  background-color: teal;

  padding: 12px;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  /* height: 36px; */
  border: none;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-weight: 600;
  font-size: 18px;
  border: none;
  outline: none;
  padding: 0 12px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
