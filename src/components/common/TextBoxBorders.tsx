import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { COLORS, ColorsType } from "../../constants";

interface TextBoxBordersProps {
    color?: ColorsType;
    bgOpacity?: number;
}

const TextBoxBorders: React.FC<TextBoxBordersProps> = ({
    color = "cream",
    bgOpacity = 0,
    children
}) => {
    return (
        <Container>
            <TextWrapper color={color}>
                <TextContainer color={color} bgOpacity={bgOpacity}>
                    {children}
                </TextContainer>
            </TextWrapper>
        </Container>
    );
};

const TextWrapper = styled("div")<{ color: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${({ color: color }) => COLORS[color]};
    border-radius: 33px;
    padding: 12px;
    box-shadow: inset 0 0 10px ${({ color }) => COLORS[color]};
`;

const TextContainer = styled("div")<{ color: string; bgOpacity: number }>`
    background-color: ${({ color, bgOpacity }) =>
        transparentize(bgOpacity, COLORS[color])};
    border-radius: 33px;
`;

const Container = styled.div`
    display: flex;
`;

export default TextBoxBorders;
