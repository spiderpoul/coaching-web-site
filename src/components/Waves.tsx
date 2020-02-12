import React from "react";
import { Section } from "./common/commonStyled";
import { ColorsType, COLORS } from "../constants";
import { Parallax } from "react-scroll-parallax";
import styled from "styled-components";

interface WavesProps {
    fill: ColorsType;
}

const Waves = ({ fill }) => {
    return (
        <SectionStyled fullWidth>
            <SvgTop xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill={COLORS[fill]}
                    fill-opacity="1"
                    d="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,122.7C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                ></path>
            </SvgTop>
            <ParallaxStyled y={[-20, 10]}>
                <SvgBottom
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill={COLORS[fill]}
                        fill-opacity="0.5"
                        d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,181.3C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </SvgBottom>
            </ParallaxStyled>
            <ParallaxStyled y={[-50, 0]}>
                <SvgBottom
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill={COLORS[fill]}
                        fill-opacity="0.3"
                        d="M0,160L80,176C160,192,320,224,480,218.7C640,213,800,171,960,133.3C1120,96,1280,64,1360,48L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </SvgBottom>
            </ParallaxStyled>
        </SectionStyled>
    );
};

const SectionStyled = styled(Section)`
    position: relative;
    margin-bottom: -150px;
`;

const SvgTop = styled.svg`
    width: 100%;
`;

const SvgBottom = styled.svg`
    width: 100%;
`;

const ParallaxStyled = styled(Parallax)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
`;

export default Waves;
