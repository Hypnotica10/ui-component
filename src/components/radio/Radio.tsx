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

  &:checked + span span {
    background-color: black;
  }

  &:checked ~ span:nth-child(3) {
    animation: rippleOn 500ms forwards ease-out;
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
`;

const RadioWrapperStyled = styled.span`
  position: relative;
  display: inline-flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  overflow: hidden;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const RadioStyled = styled.span`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  border: 2px solid #000;
  border-radius: 50%;
  transition: background-color linear 100ms;
`;

const RadioText = styled.span`
  font-size: 16px;
  line-height: 1;
  text-transform: capitalize;
  user-select: none;
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

const RadioInnerStyled = styled.span`
  position: absolute;
  width: 80%;
  height: 80%;
  background-color: transparent;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: background-color linear 100ms;
`;

interface RadioProps {
  text: string;
  name: string;
  id: string;
}

const Radio = ({ text, name, id }: RadioProps) => {
  return (
    <LabelStyled className="">
      <RadioWrapperStyled className="radio">
        <InputStyled type="radio" name={name} id={id} />
        <RadioStyled className="">
          <RadioInnerStyled className="radio-inner"></RadioInnerStyled>
        </RadioStyled>
        <CheckboxRippleStyled className="checkbox-ripple"></CheckboxRippleStyled>
      </RadioWrapperStyled>
      <RadioText className="checkbox-text">{text}</RadioText>
    </LabelStyled>
  );
};

export default Radio;
