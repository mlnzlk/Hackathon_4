import { styled } from "styled-components";

export const UserDesc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g5};

  & > div {
    text-align: left;

    & > p {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 6px;
    }

    & > span {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

export const ModifyBtn = styled.button`
  border-radius: 30px;
  border: 1px solid ${(props) => props.theme.color.gray.g5};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 10px;
`;

export const ProfileLi = styled.li`
  padding: 16px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.color.gray.g5};
`;
