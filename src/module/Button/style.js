import styled from "styled-components";

export const BtnDefault = styled.button`
  border-radius: ${(props) => props.$borderRadius};
  color: ${(props) => props.color};
  padding: ${(props) => props.$padding};
  width: ${(props) => props.width};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: 1;
  box-sizing: border-box;

  /* main color button */
  &.main {
    background-color: ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.text.white};
  }

  /* gray color button */
  &.sub {
    background-color: ${(props) => props.theme.color.gray.g1};
    color: ${(props) => props.theme.color.text.white};
  }

  /* main color line button */
  &.line {
    border: 1px solid ${(props) => props.theme.color.main};
    color: ${(props) => props.theme.color.main};
  }
`;
