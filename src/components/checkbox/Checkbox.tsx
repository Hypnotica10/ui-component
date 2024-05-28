import styled from "styled-components";

const LabelStyled = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const InputStyled = styled.input`
  opacity: 0;
  position: absolute;
  margin: 0;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  left: 0;
  pointer-events: none;

  &:checked + span {
    background-color: black;
    & span {
      animation-duration: 800ms;
      animation-timing-function: ease;
      animation-name: checkmarkOn;
      transform: scaleX(-1) rotate(135deg);
      animation-fill-mode: forwards;
    }
  }

  &:checked ~ span:nth-child(3) {
    animation: rippleOn 500ms forwards ease-out;
  }

  &:not(:checked) ~ span:nth-child(3) {
    animation: rippleOff 500ms forwards ease-out;
  }

  @keyframes checkmarkOn {
    0% {
      height: 0;
      width: 0;
      opacity: 1;
    }
    20% {
      height: 0;
      width: 5px;
      opacity: 1;
    }
    40% {
      height: 10px;
      width: 5px;
      opacity: 1;
    }
    100% {
      height: 10px;
      width: 5px;
      opacity: 1;
    }
  }

  @keyframes rippleOn {
    0% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
      transform: scale(13, 13);
    }
  }

  @keyframes rippleOff {
    0% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
      transform: scale(13, 13);
    }
  }
`;

const CheckboxWrapperStyled = styled.span`
  position: relative;
  display: inline-flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  /* overflow: hidden; */
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const CheckboxStyled = styled.span`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid #000;
  border-radius: 4px;
  transition: background-color linear 100ms;
`;

const CheckboxText = styled.span`
  font-size: 16px;
  line-height: 1;
  text-transform: capitalize;
  user-select: none;
`;

const CheckmarkSyled = styled.span`
  opacity: 0;
  height: 10px;
  width: 5px;
  transform-origin: left top;
  border-right: 2px solid #fff;
  border-top: 2px solid #fff;
  content: "";
  position: absolute;
  top: 9px;
  left: 2.5px;
`;

const CheckboxRippleStyled = styled.span`
  position: absolute;
  content: "";
  background-color: rgba(0, 0, 0, 0.5);
  height: 4px;
  width: 4px;
  border-radius: 100%;
  z-index: 1;
  opacity: 0;
  margin: 0;
`;

interface CheckboxProps {
  text: string;
  name: string;
  id: string;
}

const Checkbox = ({ text, name, id }: CheckboxProps) => {
  return (
    <LabelStyled className="">
      <CheckboxWrapperStyled className="checkbox">
        <InputStyled type="checkbox" name={name} id={id} />
        <CheckboxStyled className="">
          <CheckmarkSyled className="checkmark"></CheckmarkSyled>
        </CheckboxStyled>
        <CheckboxRippleStyled className="checkbox-ripple"></CheckboxRippleStyled>
      </CheckboxWrapperStyled>
      <CheckboxText className="checkbox-text">{text}</CheckboxText>
    </LabelStyled>
  );
};

export default Checkbox;
