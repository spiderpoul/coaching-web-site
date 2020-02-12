import React from "react";
import { Section } from "../common/commonStyled";
import styled from "styled-components";
import Button from "../common/Button";
import { COLORS, WIDTH_CONTENT } from "../../constants";
import { FONT_GOTHAM_MEDIUM } from "../../styles/fonts";
import { CompatibleImg } from "../Img";
import TitleSection from "../common/TitleSection";

interface HowItWorksProps {
    items: string[];
    title: string;
    buttonText: string;
    image: any;
}

const HowItWorks: React.FC<HowItWorksProps> = ({
    items,
    title,
    buttonText,
    image
}) => {
    return (
        <Section fullWidth bgColor="lilacEvening" padding={[42, 12]}>
            {title && <TitleSection title={title} color="white" />}
            <Content>
                <ImageContainer>
                    <CompatibleImg image={image} />
                </ImageContainer>
                <ItemsContainer>
                    {items.map(item => (
                        <BulletItem>★ {item}</BulletItem>
                    ))}
                </ItemsContainer>
            </Content>
            <ButtonStyled bgColor="white" borderColor="lilacDark">
                {buttonText}
            </ButtonStyled>
        </Section>
    );
};

const ImageContainer = styled.div`
    flex-basis: 400px;
    margin-right: 48px;
`;

const Content = styled.div`
    margin-top: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${WIDTH_CONTENT};
`;

const BulletItem = styled.div`
    color: ${COLORS.lilacDark};
    font-size: 18px;
    font-family: ${FONT_GOTHAM_MEDIUM};
    margin-bottom: 18px;
`;

const ItemsContainer = styled.div`
    flex-shrink: 0;
    background-color: ${COLORS.white};
    padding: 36px;
    border-radius: 12px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`;

const TextContainer = styled.div`
    padding: 20px;
    color: ${COLORS.lilacDark};
    font-family: ${FONT_GOTHAM_MEDIUM};
    font-size: 36px;
`;

const ButtonStyled = styled(Button)`
    margin-top: 84px;
`;

export default HowItWorks;
