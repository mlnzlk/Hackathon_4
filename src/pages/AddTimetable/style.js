import { styled } from "styled-components";

export const Section = styled.section`
  padding: 130px 20px 0;
  min-width: 390px;

  & > button.finish {
    width: 80%;
    min-width: 350px;
    max-width: 500px;
    position: fixed;
    z-index: -99;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%);
  }
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
  margin-top: 14%;
  line-height: 1.6;
`;

export const DescImg = styled.img`
  width: 240px;
  margin-top: 12px;
`;
