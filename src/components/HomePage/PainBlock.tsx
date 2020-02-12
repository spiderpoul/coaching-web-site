import React from "react";
import CardItem from "../common/CardItem";
import styled from "styled-components";
import TextBoxBorders from "../common/TextBoxBorders";
import { WIDTH_CONTENT, COLORS, ColorsType } from "../../constants";
import { Section } from "../common/commonStyled";
import { FONT_GOTHAM_MEDIUM } from "../../styles/fonts";

interface PainBlockProps {
    title: string;
    painItems: string[];
    borderColor: ColorsType;
    bgColorItems: ColorsType;
    bgSection: ColorsType;
    image?: JSX.Element;
}

const PainBlock: React.FC<PainBlockProps> = ({
    title,
    painItems = [],
    borderColor: itemsColor,
    bgColorItems,
    bgSection,
    image
}) => {
    return (
        <Section
            fullWidth
            bgColor={bgSection !== "white" ? bgSection : undefined}
            padding={[42, 12]}
        >
            {title && (
                <TextBoxBorders color={bgColorItems} bgOpacity={0.3}>
                    <TextContainer>{title}</TextContainer>
                </TextBoxBorders>
            )}
            <PainContainer>
                {painItems.map(item => (
                    <PainItem>
                        <CardItem
                            text={item}
                            bgColor={bgColorItems}
                            borderColor={itemsColor}
                        />
                    </PainItem>
                ))}
            </PainContainer>
            {image}
        </Section>
    );
};

const PainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: ${WIDTH_CONTENT};
    margin-top: 36px;
`;
const PainItem = styled.div`
    display: flex;

    height: 118px;
    flex-basis: 533px;
    margin-bottom: 32px;
`;

const TextContainer = styled.div`
    padding: 20px;
    color: ${COLORS.lilac};
    font-family: ${FONT_GOTHAM_MEDIUM};
    font-size: 36px;
`;

export default PainBlock;
