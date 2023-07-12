import { styled } from "styled-components";

export const Section = styled.section`
  background-color: ${(props) => props.theme.color.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
