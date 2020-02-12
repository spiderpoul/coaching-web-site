import React from "react";
import styled from "styled-components";
import { COLORS, ColorsType } from "../../constants";

interface CardObjectionProps {
    bgColor?: ColorsType;
    text: string;
    title: string;
}

const CardObjection: React.FC<CardObjectionProps> = ({
    bgColor = "lilacDark",
    text,
    title
}) => {
    return (
        <TextWrapper bgColor="white">
            <Title bgColor={bgColor}>{title}</Title>
            <TextContainer>{text}</TextContainer>
        </TextWrapper>
    );
};

const Title = styled("div")<{ bgColor: string }>`
    position: absolute;
    top: -44px;
    left: 12px;
    right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgColor }) => COLORS[bgColor]};
    border-radius: 50px;
    color: ${COLORS.white};
    font-size: 24px;
    text-align: center;    
    height: 88px;
    padding: 12px;
`;

const TextWrapper = styled("div")<{ bgColor: string }>`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 12px;
    background-color: ${({ bgColor }) => COLORS[bgColor]};
    box-shadow: 5px 5px 20px rgba(68, 68, 68, 0.6);
    padding: 50px 12px;
    height: 300px;
    width: 300px;
`;

const TextContainer = styled("div")`
    font-size: 18px;
    text-align: center;
    color: ${COLORS.lilacDark};
`;

export default CardObjection;
