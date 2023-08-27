import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  align-items: center;
`;

export const MainBtn = styled.button`
  background-color: #fff;
  border-radius: 8px;

  margin-top: 8px;
  width: 100px;
  height: 25px;

  cursor: pointer;

  transition: background-color 250ms linear;

  :hover {
    background-color: pink;
  }

  :active {
    transition: background-color 50ms linear;
    background-color: orange;
  }
`;
