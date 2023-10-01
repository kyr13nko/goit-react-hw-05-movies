import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  width: 80px;

  color: teal;
  border: 1px solid teal;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  border-radius: 4px;
  padding: 8px 16px;
`;
