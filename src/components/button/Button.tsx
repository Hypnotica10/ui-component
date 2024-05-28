import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface PropsButton {
  children: React.ReactNode,
  type: 'button' | 'submit' | 'reset',
}

const ButtonStyled = styled.button`
  overflow: hidden;
  outline: none;
  position: relative;
  cursor: pointer;
  background: linear-gradient(to right, #ddd6f3, #faaca8);
  padding: 10px 30px;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  line-height: 1;
`;

const RipplesWrapperStyled = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  span.ripple {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: #fff;
    animation-name: ripple;
    animation-duration: 1000ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  cleanUpFunction: () => void
) => {
  useEffect(() => {
    let bounce: ReturnType<typeof setTimeout> | undefined;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, 1000);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, cleanUpFunction]);
};

type coordinate = {
  x: number,
  y: number,
  size: number
};

const Ripple = () => {
  const [rippleArray, setRippleArray] = useState<coordinate[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent) => {
    const rippleWrapper: DOMRect = event.currentTarget.getBoundingClientRect();
    const size: number =
      rippleWrapper.width > rippleWrapper.height
        ? rippleWrapper.width
        : rippleWrapper.height;
    const x: number = event.pageX - rippleWrapper.x - size / 2;
    const y: number = event.pageY - rippleWrapper.y - size / 2;
    const newRipple: coordinate = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RipplesWrapperStyled onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              className="ripple"
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RipplesWrapperStyled>
  );
};

const Button = ({ children, type }: PropsButton) => {
  return (
    <ButtonStyled type={type}>
      {children}
      <Ripple />
    </ButtonStyled>
  );
};

export default Button;
