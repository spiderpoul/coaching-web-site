import React, { useState, CSSProperties } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "gatsby";
import { FONT_GOTHAM_LIGHT } from "../styles/fonts";
import { device } from "./commonStyled";

interface MobileMenuProps {
  items: {
    url: string;
    title: string;
  }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items }) => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => setIsOpened(!isOpened);

  return (
    <>
      <BurgerContainer isOpened={isOpened} onClick={toggleMenu}>
        <LineTop />
        <LineMiddle />
        <LineBottom />
      </BurgerContainer>
      <Container isOpened={isOpened}>
        <MenuContainer>
          {items.map((item, i) => (
            <MenuItem
              key={i}
              to={item.url}
              activeStyle={activeStylesMenuItem}
            >
              {item.title}
            </MenuItem>
          ))}
        </MenuContainer>
        <BgShadow isOpened={isOpened} onClick={toggleMenu} />
      </Container>
    </>
  );
};

export default MobileMenu;

const Line = styled.div`
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #000000;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`;

const LineTop = styled(Line)``;

const LineMiddle = styled(Line)`
  transform-origin: 0% 0%;
`;

const LineBottom = styled(Line)`
  transform-origin: 0% 100%;
`;

const BurgerContainer = styled("div")<{ isOpened: boolean }>`
  position: relative;
  z-index: 1001;
  width: 40px;
  height: 22px;
  display: none;

  margin-right: 20px;
  margin-left: 20px;

  ${({ isOpened }) =>
    isOpened &&
    css`    
    ${LineTop}, ${LineMiddle},${LineBottom} {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }

    ${LineMiddle} {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }

    ${LineBottom} {
      transform: rotate(-45deg) translate(0, -1px);
    }
  `}

  @media ${device.laptopM} {
    display: block;
  } 
`;

const activeStylesMenuItem: CSSProperties = {
  color: "#A60424"
};

const SlideIn = keyframes`
  0% {
    transform: translate(-100%, 0);
  }

  100% {
    transform: none;
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  z-index: 1;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;

  background: #ffffff;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  animation: 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) ${SlideIn} forwards;
`;

const Container = styled("div")<{ isOpened: boolean }>`
  position: absolute;
  display: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  padding-top: 50px;

  z-index: 1000;

  @media ${device.laptopM} {
    display: ${({ isOpened }) => (isOpened ? "block" : "none")};
  }
`;

const BgShadow = styled("div")<{ isOpened: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0);

  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${({ isOpened }) =>
    isOpened &&
    css`
      visibility: visible;
      opacity: 1;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(2px);
    `}
`;

const MenuItem = styled(Link)`
  display: flex;
  width: 100%;
  padding: 14px 24px 14px 36px;
  color: #000000;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-family: ${FONT_GOTHAM_LIGHT};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #a60424;
  }
`;
