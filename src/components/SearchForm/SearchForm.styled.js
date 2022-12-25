import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 6px 6px 6px 10px;
  border-radius: 8px;
  font-size: 22px;
  width: 360px;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #000;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  color: #000;
  font-weight: 500;
  background: #cfe0e8;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #2196f3;
    color: #fff;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
