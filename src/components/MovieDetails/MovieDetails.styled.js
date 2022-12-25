import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
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

export const List = styled.ul`
  list-style: none;
  margin: 0 auto;
  gap: 12px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-bottom: 1px solid black;
`;
