import React from "react";
import { Section } from "../common/commonStyled";
import styled from "styled-components";
import Button from "../common/Button";
import CardObjection from "../common/CardObjection";
import { COLORS, WIDTH_CONTENT } from "../../constants";
import { FONT_GOTHAM_MEDIUM } from "../../styles/fonts";
import TitleSection from "../common/TitleSection";
import TextBoxBorders from "../common/TextBoxBorders";
import { CompatibleImg } from "../Img";

interface ObjectionsProps {
    image: string;
    title: string;
    aboutTitle: string;
    textItems: string[];
    quote: string;
}

const About: React.FC<ObjectionsProps> = ({
    image,
    title,
    aboutTitle,
    textItems,
    quote
}) => {
    return (
        <Section fullWidth padding={[42, 12]}>
            {title && <TitleSection title={title} color="lilacMorning" />}
            <Content>
                <ImageWrap>
                    <TextBoxBorders color="lilacMorning">
                        <CompatibleImgWrap>
                            <CompatibleImg image={image} />
                        </CompatibleImgWrap>
                    </TextBoxBorders>
                </ImageWrap>
                <TextWrap>
                    <TitleAbout>{aboutTitle}</TitleAbout>
                    {textItems.map(item => (
                        <TextAbout>★ {item}</TextAbout>
                    ))}
                    {quote && <Quote>{quote}</Quote>}
                </TextWrap>
            </Content>
        </Section>
    );
};

const CompatibleImgWrap = styled.div`
    border-radius: 33px;
    overflow: hidden;
    width: 400px;
`;

const ImageWrap = styled.div`
    height: 600px;
    margin-right: 48px;
`;

const TextWrap = styled.div`
    flex-grow: 1;
    max-width: 600px;
    color: ${COLORS.lilacDark};
`;

const TitleAbout = styled.div`
    font-size: 48px;
    margin-bottom: 48px;
`;

const TextAbout = styled.div`
    font-size: 20px;
    margin-bottom: 12px;
`;

const Quote = styled.div`
    font-style: italic;
    color: ${COLORS.black};
    margin-top: 48px;
    font-size: 20px;
`;

const Content = styled.div`
    margin-top: 84px;
    display: flex;
    width: 100%;
    justify-content: center;
    max-width: ${WIDTH_CONTENT};
`;

export default About;
