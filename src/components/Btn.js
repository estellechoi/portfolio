import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    color: rgb(40, 43, 46);
    font-size: 22px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 25px;
    position: relative;
    transition: transform 0.4s;
    transform: ${props => props.open ? 'rotateZ(45deg)' : 'rotateZ(0)'};

    &::before {
        content: "";
        border-radius: inherit;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(40, 43, 46, 0.08);
        display: none;
    }

    &:hover::before {
        display: block;
    }
`;

export default function Btn({ render, label, title, open, onClick }) {

    return render ? <Button onClick={onClick} title={title} open={open}>{label}</Button> : null;
}