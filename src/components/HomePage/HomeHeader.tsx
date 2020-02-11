import React from 'react'
import { CompatibleImg } from '../Img'
import styled from "styled-components";

interface HomeHeaderProps {
  img: any,
  text: string;
}

const HomeHeader:React.FC<HomeHeaderProps> = ({img, text}) => {
  return (
    <Container>
      <ImageContainer>
        {img && <CompatibleImg image={img} />}
      </ImageContainer>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 670px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export default HomeHeader
