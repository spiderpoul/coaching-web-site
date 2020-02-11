import React from "react";
import styled from "styled-components";

import HelmetComponent from "./Helmet";
import "../styles/index.scss";
import { SeoMetaItem } from "../models";
import { ScrollUpButton } from "./ScrollUpButton";

interface LayoutProps {
  seoMeta: SeoMetaItem[];
}

const Layout: React.FC<LayoutProps> = ({ children, seoMeta }) => {
  return (
    <>
      <HelmetComponent seoMeta={seoMeta} />
      <Content>{children}</Content>
      <ScrollUpButton showAfter={700} duration={500} />
    </>
  );
};

const Content = styled.section`  
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%; 
  overflow-x: hidden; 
`;

export default Layout;
