import { useState } from "react";
import styled from "styled-components";
import { IoShareSocialOutline, IoCloseOutline } from "react-icons/io5";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaDribbbleSquare,
} from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const SocialContainerStyled = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleStyled = styled.div<{ isactive: string }>`
  position: relative;
  width: 100px;
  height: 100px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  box-shadow: 0 25px 15px rgba(0, 0, 0, 0.25), 0 25px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 3em;
  color: #fff;
  background-color: #1877f2;
  z-index: 1;
  backdrop-filter: blur(10px);
  transition: 100ms;
  ${(props) =>
    props.isactive === "true" &&
    `
        background-color: transparent;
        color: #1877f2;
  `}
  & div {
    position: absolute;
    transition: 500ms;
    opacity: 0;
  }

  & div:nth-child(1) {
    opacity: 1;
    transform: rotate(360deg);
    ${(props) =>
      props.isactive === "true" &&
      ` 
        opacity: 0;
        transform: rotate(0deg);
    `}
  }

  & div:nth-child(2) {
    transform: rotate(0deg);
    ${(props) =>
      props.isactive === "true" &&
      ` 
        opacity: 1;
        transform: rotate(360deg);
    `}
  }
`;

const ListSocialIconStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemSocialIconStyled = styled.li<{
  index: number;
  color: string;
  isscale: string;
}>`
  position: absolute;
  left: 0;
  transform-origin: 110px;
  transition: 500ms;
  transition-delay: ${(props) =>
    props.isscale === "true"
      ? `calc(${100 * props.index}ms)`
      : `calc(${100 * (4 - props.index)}ms)`};
  transform: ${(props) => `rotate(calc(${(360 / 4) * props.index}deg))`};
  scale: 0;
  overflow: hidden;
  & > a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    color: white;
    font-size: 2.25em;
    transform: ${(props) => `rotate(calc(${(-360 / 4) * props.index}deg))`};
  }

  ${(props) =>
    props.isscale === "true" &&
    `
        scale: 1;
  `}
`;

const SocialButtonAnimation = () => {
  const [active, setActive] = useState<boolean>(false);

  const handleClick = (): void => {
    setActive(!active);
  };

  return (
    <SocialContainerStyled>
      <ListSocialIconStyled>
        <ItemSocialIconStyled
          color="#1877f2"
          index={1}
          isscale={active.toString()}
        >
          <a href="">
            <FaFacebookSquare />
          </a>
        </ItemSocialIconStyled>
        <ItemSocialIconStyled
          color="#ff0000"
          index={2}
          isscale={active.toString()}
        >
          <a href="">
            <FaYoutubeSquare />
          </a>
        </ItemSocialIconStyled>
        <ItemSocialIconStyled
          color="#000"
          index={3}
          isscale={active.toString()}
        >
          <a href="">
            <FaSquareThreads />
          </a>
        </ItemSocialIconStyled>
        <ItemSocialIconStyled
          color="#ea4c89"
          index={4}
          isscale={active.toString()}
        >
          <a href="">
            <FaDribbbleSquare />
          </a>
        </ItemSocialIconStyled>
      </ListSocialIconStyled>
      <ToggleStyled isactive={active.toString()} onClick={handleClick}>
        <div>
          <IoShareSocialOutline />
        </div>
        <div>
          <IoCloseOutline />
        </div>
      </ToggleStyled>
    </SocialContainerStyled>
  );
};

export default SocialButtonAnimation;
