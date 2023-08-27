import styled from "@emotion/styled";

export const Contact = styled.li`
font-size: 24px;
`;

export const DeleteBtn = styled.button`
background-color: #fff;
border-radius: 8px;

margin-top: 8px;
margin-left: 8px;
width: 60px;
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