import React from "react";
import { graphql } from "gatsby";

import { Parallax } from "react-scroll-parallax";
import cloud from "../../img/home-page/cloud.svg";
import styled from "styled-components";

const Clouds = () => {
    return (
        <>
            <ParallaxStyled left={48} top={50} y={["-50px", "200px"]}>
                <Cloud width={400} src={cloud} />
            </ParallaxStyled>
            <ParallaxStyled right={48} bottom={0} y={["-100px", "100px"]}>
                <Cloud width={300} src={cloud} />
            </ParallaxStyled>
        </>
    );
};

const ParallaxStyled = styled(Parallax)<{
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}>`
    position: absolute;
    z-index: 0;
    left: ${({ left }) => left && `${left}px`};
    right: ${({ right }) => right && `${right}px`};
    bottom: ${({ bottom }) => bottom && `${bottom}px`};
    top: ${({ top }) => top && `${top}px`};
`;

const Cloud = styled("img")<{ width: number }>`
    width: ${({ width }) => `${width}px`};
`;

export default Clouds;
