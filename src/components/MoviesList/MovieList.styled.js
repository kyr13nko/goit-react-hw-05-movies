import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const Item = styled.li`
  width: calc((100% - 36px) / 4);
`;

export const MovieLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  color: #000000;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  max-height: 400px;
  cursor: pointer;
  overflow: hidden;
  padding: 4px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.07);
  }

  img {
    min-height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50px;
  }
`;
