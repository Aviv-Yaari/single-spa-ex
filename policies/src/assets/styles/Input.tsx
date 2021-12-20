import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  border: 1px solid rgb(204, 204, 204);
  font-family: inherit;
  padding: 8px;
  border-radius: 4px;
  transition: all 100ms ease 0s;
  font-size: 1em;

  &:hover {
    border-color: rgb(179, 179, 179);
  }

  &:focus {
    border-color: rgb(38, 132, 255);
    box-shadow: rgb(38 132 255) 0px 0px 0px 1px;
  }
`;
