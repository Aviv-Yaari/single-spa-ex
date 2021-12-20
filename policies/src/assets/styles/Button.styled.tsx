import styled, { css } from "styled-components";
import theme from "./theme";

export const Button = styled.button<{ theme: typeof theme }>`
  background: ${(props) => props.theme.colors.main};
  padding: 10px 25px;
  border: none;
  color: rgb(255, 255, 255);
  font-family: inherit;
  border-radius: 20px;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
    css`
      background: transparent;
      outline: 1px solid #ccc;
      color: #ccc;
      pointer-events: none;
    `}
`;
