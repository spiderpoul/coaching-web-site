import React from "react";
import styled from "styled-components";
import { COLORS, ColorsType } from "../../constants";

interface CardItemProps {
    borderColor?: ColorsType;
    bgColor?: ColorsType;
    text: string;
}

const CardItem: React.FC<CardItemProps> = ({
    borderColor = "lilac",
    bgColor = "white",
    text
}) => {
    return (
        <TextWrapper borderColor={borderColor} bgColor={bgColor}>
            <TextContainer>{text}</TextContainer>
        </TextWrapper>
    );
};

const TextWrapper = styled("div")<{ borderColor: string; bgColor: string }>`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 3px solid ${({ borderColor }) => COLORS[borderColor]};
    border-radius: 33px;
    background-color: ${({ bgColor }) => COLORS[bgColor]};
    box-shadow: 5px 5px 20px rgba(68, 68, 68, 0.6);
    padding: 32px;
`;

const TextContainer = styled("div")`
    font-size: 18px;
    text-align: center;
`;

export default CardItem;
