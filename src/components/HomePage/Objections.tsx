import React from "react";
import { Section } from "../common/commonStyled";
import styled from "styled-components";
import Button from "../common/Button";
import CardObjection from "../common/CardObjection";
import { COLORS, WIDTH_CONTENT } from "../../constants";
import { FONT_GOTHAM_MEDIUM } from "../../styles/fonts";
import TitleSection from "../common/TitleSection";

interface ObjectionsProps {
    items: { title: string; text: string }[];
    title: string;
    buttonText?: string;
}

const Objections: React.FC<ObjectionsProps> = ({
    items,
    title,
    buttonText
}) => {
    return (
        <Section fullWidth padding={[42, 12]}>
            {title && <TitleSection title={title} color="lilacMorning" />}
            <Content>
                {items.map(({ title, text }) => (
                    <CardObjectionWrap>
                        <CardObjection title={title} text={text} />
                    </CardObjectionWrap>
                ))}
            </Content>
            {/* <ButtonStyled bgColor="white" borderColor="lilacDark">
                {buttonText}
            </ButtonStyled> */}
        </Section>
    );
};

const CardObjectionWrap = styled.div`
    flex-basis: 350px;    
    margin-bottom: 88px;
`;

const Content = styled.div`
    margin-top: 84px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${WIDTH_CONTENT};
`;

const ButtonStyled = styled(Button)`
    margin-top: 84px;
`;

export default Objections;
