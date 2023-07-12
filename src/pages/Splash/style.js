import { styled } from "styled-components";

export const Section = styled.section`
  background-color: ${(props) => props.theme.color.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > img {
    width: 108px;
    margin-bottom: 36px;
  }

  & > p {
    color: #ffffff;
    font-size: 14px;
  }
`;
