import React from "react";
import styled from "styled-components";
import TextBoxBorders from "../common/TextBoxBorders";
import { COLORS, ColorsType } from "../../constants";
import { FONT_GOTHAM_MEDIUM } from "../../styles/fonts";

interface TitleSectionProps {
    title: string;
    color: ColorsType;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, color }) => {
    return (
        <TextBoxBorders color={color} bgOpacity={0.3}>
            <TextContainer>{title}</TextContainer>
        </TextBoxBorders>
    );
};

const TextContainer = styled.div`
    padding: 20px;
    color: ${COLORS.lilacDark};
    font-family: ${FONT_GOTHAM_MEDIUM};
    font-size: 36px;
`;

export default TitleSection;
