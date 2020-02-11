import React from "react";
import jump from "jump.js";
import Icon from "../img/arrow-up.svg";
import styled, { css } from "styled-components";

export interface ScrollUpButtonProps {
  duration: number;
  showAfter: number;
}

export interface ScrollUpButtonState {
  isShown: boolean;
}

export class ScrollUpButton extends React.Component<
  ScrollUpButtonProps,
  ScrollUpButtonState
> {
  constructor(props: ScrollUpButtonProps) {
    super(props);
    this.state = { isShown: false };
  }

  private scrollUp = () => {
    jump(-window.pageYOffset, { duration: this.props.duration });
  };

  private handleScroll = () => {
    if (window.pageYOffset > this.props.showAfter) {
      if (!this.state.isShown) {
        this.setState({ isShown: true });
      }
    } else {
      if (this.state.isShown) {
        this.setState({ isShown: false });
      }
    }
  };

  public componentDidMount() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { isShown } = this.state;

    return (
      <Container isShown={isShown} onClick={this.scrollUp}>
        <Img src={Icon} />
      </Container>
    );
  }
}

const Img = styled.img`
  height: 24px;
  width: 24px;
`;

const Container = styled("div")<{ isShown: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  outline: none;
  margin: 0;
  border-radius: 50%;

  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 56px;
  height: 56px;

  visibility: hidden;
  opacity: 0;
  overflow: hidden;
  z-index: 999;

  transition: opacity 0.2s ease-in-out;
  background-color: #ffffff;
  -webkit-transform: translateZ(0);
  box-shadow: 0 1px 2px 0 rgba(25, 27, 26, 0.2),
    0 1px 8px 0 rgba(25, 27, 26, 0.1);

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
  }

  ${({ isShown }) =>
    isShown &&
    css`
      visibility: visible;
      opacity: 0.8;

      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    `}
`;
