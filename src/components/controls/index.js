import React from "react";
import { BiShuffle } from "react-icons/bi";
import { RiRepeat2Fill, RiRepeatOneFill } from "react-icons/ri";
import { ImEqualizer2 } from "react-icons/im";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import styled from "styled-components";

const Controls = ({ togglePlayPause, isPlaying, backTen, forwardTen }) => {
  return (
    <ControlBox>
      <Switch>
        <BiShuffle />
        <RiRepeatOneFill />
      </Switch>
      <ButtonContainer>
        <Arrow>
          <button onClick={backTen}>
            <MdOutlineArrowBackIos />
          </button>
        </Arrow>
        <Span>
          <Button onClick={togglePlayPause}>
            {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
          </Button>
        </Span>
        <Arrow>
          <button onClick={forwardTen}>
            <MdOutlineArrowForwardIos />
          </button>
        </Arrow>
      </ButtonContainer>
      <Switch>
        <RiRepeat2Fill />
        <ImEqualizer2 />
      </Switch>
    </ControlBox>
  );
};

export default Controls;

const Button = styled.button`
  cursor: pointer;
  background: linear-gradient(
    159.16deg,
    #917ce4 26.46%,
    rgba(63, 45, 137, 0) 116.55%
  );
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 25px;
  box-shadow: inset 5px 5px 8px rgba(255, 255, 255, 0.2),
    0px 2.5px 5px rgba(55, 46, 152, 0.65);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;

  //  Button on click
  &:active {
    box-shadow: 5px 5px 8px rgba(255, 255, 255, 0.2),
      inset 0px 2.5px 5px rgba(55, 46, 152, 0.65);
    // background: linear-gradient(327.56deg, #5f30c1 19.23%, #968ef1 81.76%);
    background: linear-gradient(327.56deg, #5d24d6 19.23%, #7e74ed 81.76%);
  }
`;

const Span = styled.span`
  height: 51px;
  width: 51px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 100%;
  overflow: hidden;
  padding: 6px;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 5px rgba(0, 0, 0, 0.05),
    inset 5px 5px 5px rgba(0, 0, 0, 0.05), inset -5px -5px 11px #ffffff;

  &:active {
    box-shadow: inset -5px -5px 8px #ffffff,
      inset 5px 5px 5px rgba(0, 0, 0, 0.05), 5px 5px 5px rgba(0, 0, 0, 0.05),
      -5px -5px 11px #ffffff;
  }
`;

const ControlBox = styled.div`
  width: 355px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

const Switch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  * {
    height: 15px;
    width: 15px;
    cursor: pointer;
  }
  @media (max-width: 414px) {
    width: 70%;
  }

  & > *:hover {
    color: #666;
    transition: all 0.3s ease;
  }
`;

const ButtonContainer = styled.div`
  width: 164px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Arrow = styled.span`
  width: 33px;
  height: 33px;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 5px rgba(0, 0, 0, 0.05),
    inset 5px 5px 5px rgba(0, 0, 0, 0.05), inset -5px -5px 11px #ffffff;

  &:active {
    box-shadow: inset -5px -5px 8px #ffffff,
      inset 5px 5px 5px rgba(0, 0, 0, 0.05), 5px 5px 5px rgba(0, 0, 0, 0.05),
      -5px -5px 11px #ffffff;
  }
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 23px;
    height: 23px;
    border: none;
    background: linear-gradient(
      159.16deg,
      #917ce4 26.46%,
      rgba(63, 45, 137, 0) 116.55%
    );
    outline: none;
    color: #ffffff;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: inset 5px 5px 8px rgba(255, 255, 255, 0.2),
      0px 2.5px 5px rgba(55, 46, 152, 0.65);
  }

  button:active {
    box-shadow: 5px 5px 8px rgba(255, 255, 255, 0.2),
      inset 0px 2.5px 5px rgba(55, 46, 152, 0.65);
    background: linear-gradient(327.56deg, #5d24d6 19.23%, #7e74ed 81.76%);
  }
`;
