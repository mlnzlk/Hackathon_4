import { styled } from "styled-components";

export const HeaderWrap = styled.header`
  width: 100%;
  padding: 70px 30px 34px;
  box-sizing: border-box;
  display: flex;
  background-color: #ffffff;

  & > img {
    width: 24px;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  translate: calc(-50%);
  margin-top: 4px;
`;
