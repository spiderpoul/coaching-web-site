import React from "react";
import CardItem from "../common/CardItem";
import styled from "styled-components";
import { WIDTH_CONTENT, COLORS, ColorsType } from "../../constants";
import { Section } from "../common/commonStyled";
import { FONT_GOTHAM_MEDIUM } from "../../styles/fonts";
import Button from "../common/Button";
import TitleSection from "../common/TitleSection";

interface PainBlockProps {
    title: string;
    painItems: string[];
    borderColor: ColorsType;
    bgColorItems: ColorsType;
    bgSection: ColorsType;
    image?: JSX.Element;
    buttonText: string;
}

const PainBlock: React.FC<PainBlockProps> = ({
    title,
    painItems = [],
    borderColor: itemsColor,
    bgColorItems,
    bgSection,
    image,
    buttonText
}) => {
    return (
        <Section
            fullWidth
            bgColor={bgSection !== "white" ? bgSection : undefined}
            padding={[42, 12]}
        >
            {title && <TitleSection title={title} color={bgColorItems} />}
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
            {/* <ButtonStyled bgColor={bgColorItems} borderColor={itemsColor}>
                {buttonText}
            </ButtonStyled> */}
            {image}
        </Section>
    );
};

const ButtonStyled = styled(Button)`
    margin-top: 48px;
`;

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
    color: ${COLORS.lilacDark};
    font-family: ${FONT_GOTHAM_MEDIUM};
    font-size: 36px;
`;

export default PainBlock;
