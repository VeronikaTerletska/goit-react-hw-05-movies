import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 100px;
  border-bottom: 1px solid black;
  height: 70px;
`;

export const Link = styled(NavLink)`
  width: 120px;
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  color: black;
  &.active {
    color: #2196f3;
  }
`;
