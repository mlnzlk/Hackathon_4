import { styled } from "styled-components";

export const Section = styled.section`
  padding: 20px;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.color.gray.g1};
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 5px;
  margin-right: 10px;
  min-width: 250px;
  width: 70%;

  &::placeholder {
    color: ${(props) => props.theme.color.gray.g2};
  }
`;

export const Desc = styled.p`
  color: ${(props) => props.theme.color.gray.g3};
  font-size: 14px;
  font-weight: 400;
  margin-top: 200px;
`;
