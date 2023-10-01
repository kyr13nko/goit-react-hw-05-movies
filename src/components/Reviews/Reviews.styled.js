import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const Item = styled.li`
  border: 1px solid teal;
  border-radius: 8px;

  padding: 8px;

  h4 {
    text-decoration: underline;
    margin-bottom: 4px;
  }

  p {
    font-style: italic;
  }
`;
