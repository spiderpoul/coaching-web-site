import { ColorsType, COLORS } from "../../constants";
import styled from "styled-components";
import { FONT_GOTHAM_MEDIUM } from "../../styles/fonts";

interface ButtonContainerProps {
    borderColor: ColorsType;
    bgColor: ColorsType;
    fontSize?: number;
}

const Button = styled("div")<ButtonContainerProps>`
    border: 3px solid ${({ borderColor }) => COLORS[borderColor]};
    background-color: ${({ bgColor }) => COLORS[bgColor]};
    color: ${({ borderColor }) => COLORS[borderColor]};
    font-family: ${FONT_GOTHAM_MEDIUM};
    font-size: ${({ fontSize }) => fontSize || 24}px;
    transition: all 0.2s ease-in-out;
    padding: 32px 50px;
    border-radius: 50px;

    &:hover {
        color: ${COLORS.white};
        background-color: ${({ borderColor }) => COLORS[borderColor]};
        cursor: pointer;
    }
`;

export default Button;
