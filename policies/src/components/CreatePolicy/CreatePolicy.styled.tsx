import styled from "styled-components";
import { Container } from "../../assets/styles/Container.styled";
import { Input } from "../../assets/styles/Input";

export const Data = styled(Container)`
  margin: 10px 0;
  display: grid;
  column-gap: 10px;
  row-gap: 20px;
  align-items: center;
  @media (min-width: 720px) {
    grid-template-columns: minmax(max-content, 150px) 1fr;
  }

  .bx--toggle-input__label .bx--toggle__switch {
    margin: 0;
  }
`;

export const PolicyName = styled(Input)`
  max-width: 300px;
`;

export const Description = styled(Input)`
  max-width: 600px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 10px;
  > :first-child {
    max-width: 300px;
    flex-grow: 1;
  }
`;
