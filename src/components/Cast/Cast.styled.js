import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc((100% - 48px) / 5);
  min-height: 280px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  /* padding: 4px; */

  img {
    max-width: 100%;
    max-height: 230px;
  }
`;
