import styled, { css } from "styled-components";
import { FONT_GOTHAM_MEDIUM, FONT_GOTHAM_LIGHT } from "../../styles/fonts";
import { Link } from "gatsby";
import { WIDTH_CONTENT, ColorsType, COLORS } from "../../constants";

enum Size {
    mobile = "mobile",
    tablet = "tablet",
    laptop = "laptop",
    laptopM = "laptopM",
    laptopL = "laptopL"
}

const size: { [key in Size]: string } = {
    mobile: "550px",
    tablet: "768px",
    laptop: "1024px",
    laptopM: "1200px",
    laptopL: "1350px"
};

export const device: { [key in Size]: string } = {
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopL: `(max-width: ${size.laptopL})`
};

export const FlexSpacer = styled.div`
    flex-grow: 1;
`;

export const RoundedButtonStyles = css`
    position: relative;
    outline: none;
    background: none;

    border: 1px solid #a60424;
    border-radius: 33px;
    color: #000000;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    padding: 14px 48px 14px 48px;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        text-decoration: none;
        color: #ffffff;
        background-color: #a60424;
        box-shadow: 0 15px 54px 0 rgba(191, 16, 50, 0.22);
        cursor: pointer;
    }
`;

export const RoundedButton = styled.a`
    ${RoundedButtonStyles}
`;

export const RoundedButtonInternalLink = styled(Link)`
    ${RoundedButtonStyles}
`;

export const HighlightedText = styled.div`
    display: flex;
    align-items: center;
    font-family: ${FONT_GOTHAM_MEDIUM};
    color: #a60424;
    height: 52px;
    font-size: 24px;
    margin: 0;
    margin-bottom: 72px;
    white-space: nowrap;

    @media ${device.laptopM} {
        font-size: 20px;
        margin-bottom: 42px;
    }

    @media ${device.laptop} {
        justify-content: center;
    }

    @media ${device.mobile} {
        font-size: 16px;
        text-align: center;
        justify-content: center;
        white-space: normal;
    }
`;

export const Spacer = styled.div`
    flex-shrink: 0;
    width: calc((100vw - 1100px) / 2);
`;

export const Section = styled("section")<{
    fullWidth?: boolean;
    padding?: number[];
    bgColor?: ColorsType;
}>`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ bgColor }) => COLORS[bgColor]};
    max-width: ${({ fullWidth }) => (!fullWidth ? WIDTH_CONTENT : "")};
    width: 100%;
    padding: ${({ padding }) =>
        padding && `${padding.reduce((acc, x) => `${acc} ${x}px `, "")}`};
`;

export const RichTextView = styled.div`
    color: #000000;
    font-family: ${FONT_GOTHAM_LIGHT};
    font-size: 20px;
    line-height: 26px;
`;
