import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Link, useStaticQuery } from "gatsby";
import logo from "../img/logo.png";
import { FONT_GOTHAM_LIGHT } from "../styles/fonts";
import { device } from "./commonStyled";
import MobileMenu from "./MobileMenu";

type HeaderBgColor = "sand";

const BG_COLORS: { [key in HeaderBgColor]: string } = {
  sand: "#F7F0ED"
};

interface HeaderProps {
  bgColor?: HeaderBgColor;
}

const menus = [
  {
    title: 'Главная',
    url: '/'
  },
  {
    title: 'F.A.Q.',
    url: '/faq'
  },
  {
    title: 'Блог',
    url: '/blog'
  },
  {
    title: 'Отзывы',
    url: '/otzivy'
  },
  {
    title: 'Товары',
    url: '/tovary'
  },
  {
    title: 'Обо мне',
    url: '/obo-mne'
  },
]

const Header: React.FC<HeaderProps> = ({ children, bgColor }) => {

  return (
    <Container bgColor={bgColor}>
      <NavBar>        
        <MobileMenu items={menus} />
        <Logo src={logo} />
        <MenuContainer>
          {menus.map((item, i) => (
            <MenuItem
              key={i}
              to={item.url}
              activeStyle={activeStylesMenuItem}
            >
              {item.title}
            </MenuItem>
          ))}
        </MenuContainer>
      </NavBar>
      {children}
    </Container>
  );
};

export default Header;

const Logo = styled.img`
  width: 172px;
`;

const activeStylesMenuItem: CSSProperties = {
  border: "1px solid #A60424",
  borderRadius: "33px",
  color: "#A60424"
};

const MenuItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  color: #000000;
  white-space: nowrap;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0);
  font-family: ${FONT_GOTHAM_LIGHT};
  transition: all 0.2s ease-in-out;

  @media ${device.laptopL} {
    padding: 14px 14px;
  }

  &:hover {
    color: #a60424;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;

  @media ${device.laptopM} {
    justify-content: flex-start;
  }
`;

const Container = styled("header")<{ bgColor: HeaderBgColor }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  padding-top: 44px;
  background-color: ${({ bgColor }) => (bgColor ? BG_COLORS[bgColor] : "")};

  @media ${device.laptopM} {
    padding-top: 24px;
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  margin-left: 81px;

  @media ${device.laptopL} {
    margin-left: 30px;
  }

  @media ${device.laptopM} {
    display: none;
  }  
`;
