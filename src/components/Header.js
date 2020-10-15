import React from "react";
import styled from "styled-components";
import { device } from "./../deviceSize";
import Menu from "./Menu";



const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 2;

    @media ${device.tabletL} {
        width: 250px;
        height: 100vh;
        overflow: scroll;
    }

`;

export default function Header({ prjts }) {
    return (
        <HeaderWrapper>
            <Menu prjts={prjts}></Menu>
        </HeaderWrapper>
    );
};