import { styled } from "styled-components";

export const Ul = styled.ul`
  margin-top: 26px;
`;

export const Li = styled.li`
  display: grid;
  grid-template-columns: 2fr 1.2fr minmax(54px, 0.4fr);
  align-items: center;
  padding: 15px 30px;
  font-size: 12px;

  & :first-child {
    text-align: left;
  }

  &:first-of-type {
    background-color: ${(props) => props.theme.color.gray.g4};
  }
`;

export const DescWrap = styled.div`
  & > span {
    font-size: 10px;

    & > b {
      font-size: 10px;
      font-weight: 600;
    }
  }

  & > p {
    font-size: 14px;
    margin-top: 5px;
    font-weight: 600;
  }
`;

export const TimeDesc = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;
