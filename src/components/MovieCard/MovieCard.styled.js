import { styled } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: 24px;
  border-top: 1px solid teal;
  border-bottom: 1px solid teal;
  padding: 12px 0;
  margin-top: 10px;

  img {
    max-width: 250px;
    height: 100%;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
