import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Link, useStaticQuery } from "gatsby";
import logo from "../img/logo.png";
import { FONT_GOTHAM_LIGHT } from "../styles/fonts";
import { device } from "./common/commonStyled";
import MobileMenu from "./MobileMenu";
import { ColorsType, COLORS } from "../constants";

const menus = [
    {
        title: "Главная",
        url: "/"
    },
    {
        title: "F.A.Q.",
        url: "/faq"
    },
    {
        title: "Блог",
        url: "/blog"
    },
    {
        title: "Отзывы",
        url: "/otzivy"
    },
    {
        title: "Товары",
        url: "/tovary"
    },
    {
        title: "Обо мне",
        url: "/obo-mne"
    }
];

interface HeaderProps {
    bgColor: ColorsType;
}

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
    border: "2px solid #441732",
    borderRadius: "33px"
};

const MenuItem = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 24px;
    color: #441732;
    white-space: nowrap;
    font-size: 16px;
    font-family: ${FONT_GOTHAM_LIGHT};
    transition: all 0.2s ease-in-out;

    @media ${device.laptopL} {
        padding: 14px 14px;
    }

    &:hover {
        color: #c54f96;
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

const Container = styled("header")<{ bgColor: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    padding-top: 44px;
    background-color: ${({ bgColor }) => COLORS[bgColor]};

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
