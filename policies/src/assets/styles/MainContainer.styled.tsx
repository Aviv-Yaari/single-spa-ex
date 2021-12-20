import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 0 1fr 0;
  column-gap: 20px;
  min-height: 100vh;
  background: #ebebeb;
  > * {
    grid-column: 2;
  }
`;

export const FullRow = styled.div`
  grid-column: 1/-1;
`;
