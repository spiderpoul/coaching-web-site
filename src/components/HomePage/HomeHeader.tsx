import React from "react";
import { Parallax } from "react-scroll-parallax";
import { CompatibleImg } from "../Img";
import styled from "styled-components";
import { WIDTH_CONTENT } from "../../constants";
import TextBoxBorders from "../common/TextBoxBorders";
import { FONT_GOTHAM_MEDIUM } from "../../styles/fonts";
import { Section } from "../common/commonStyled";

interface HomeHeaderProps {
    img: any;
    text: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ img, text }) => {
    return (
        <Container fullWidth bgColor="cream">
            <Parallax y={[-40, 40]}>
                {img && <CompatibleImg image={img} />}
            </Parallax>
            {text && (
                <WrapperParallax y={[-60, 0]}>
                    <TextBoxBorders bgOpacity={0.4}>
                        <TextContainer>{text}</TextContainer>
                    </TextBoxBorders>
                </WrapperParallax>
            )}
        </Container>
    );
};

const TextContainer = styled.div`
    max-width: 600px;
    padding: 48px;
    color: #535252;
    font-size: 30px;
    font-family: ${FONT_GOTHAM_MEDIUM};
`;

const WrapperParallax = styled(Parallax)`
    max-width: ${WIDTH_CONTENT};
    width: 100%;
    position: absolute;
    bottom: 12px;
    left: 50%;
    display: flex;
    transform: translateX(-50%);
    font-weight: bold;
`;

const Container = styled(Section)`
    position: relative;
    display: block;
    margin-top: 24px;
    overflow: hidden;
`;

export default HomeHeader;
