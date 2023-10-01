import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  color: #ffffff;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  color: #000000;
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;
  padding: 8px 16px;

  &.active {
    color: #ffffff;
    background-color: teal;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding: 24px 24px;
`;
