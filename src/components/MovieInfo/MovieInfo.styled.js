import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledLink = styled(NavLink)`
  color: teal;
  border: 1px solid teal;
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;
  padding: 8px 16px;

  &.active {
    color: #ffffff;
    background-color: teal;
  }
`;
