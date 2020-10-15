import React from "react";
import styled from "styled-components";

const IconWrapper = styled.div`
    width: 34px;
`;

const Icon = styled.div`
    width: 100%;
    height: 34px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const IconImage = styled.img`
    width: 100%;
`;

const IconShadow = styled.div`
    margin: 0 auto;
    width: 50%;
    height: 0;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 8px 9px 2px rgba(0, 0, 0, 0.3);
    transform: rotateX(45deg);
    transform-style: preserve-3d;
`;


export default function SkillIcon({ src, alt}) {

    return (
            <IconWrapper>
                <Icon>
                    <IconImage src={src} alt={alt}></IconImage>
                </Icon>
                <IconShadow></IconShadow>
            </IconWrapper>
    )
}