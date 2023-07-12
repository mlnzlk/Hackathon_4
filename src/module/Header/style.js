import { styled } from "styled-components";

export const HeaderWrap = styled.header`
  width: 100%;
  padding: 70px 30px 34px;
  box-sizing: border-box;
  display: flex;
  background-color: #ffffff;
  min-width: 390px;
  align-items: center;

  & > button {
    width: 20%;

    & > img {
      width: 24px;
      float: right;
    }
  }

  &.chatlist {
    justify-content: space-between;
    background-color: ${(props) => props.theme.color.gray.g4};
    padding: 70px 30px 12px;
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

export const ChatListTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const ChatWrap = styled.header`
  width: 100%;
  padding: 70px 20px 12px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.gray.g4};
  min-width: 390px;

  & > button {
    width: 24px;

    &.search {
      width: 80px;
      margin-left: auto;

      & > img {
        float: right;
      }
    }

    & > img {
      float: left;
    }
  }
`;

export const ClassTitleWrap = styled.div`
  & > p {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  & > img {
    float: left;
    margin-right: 3px;
  }

  & > span {
    float: left;
    font-size: 10px;
    color: ${(props) => props.theme.color.gray.g3};
  }
`;
