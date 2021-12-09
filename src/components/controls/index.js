import React, { useState, useRef } from "react";
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
  const [shuffle, setShuffle] = useState(false);
  const [repeatOne, setRepeatOne] = useState(false);
  const [repeat, setRepeat] = useState(false);

  const shuffleRef = useRef(); // referrence to Shuffle Button
  const repeatOneRef = useRef(); //referrence to Repeat One button
  const repeatRef = useRef(); // referrence to Repeat Button

  // Toggle Shuffle Button color
  const handleShuffle = (e) => {
    shuffleRef.current.style.setProperty(
      "color",
      `${!shuffle ? "#5f27cd" : "#C7C5D0"}`
    );
    setShuffle(!shuffle);
  };

  //Toggle Repeat One Button color
  const handleRepeatOne = (e) => {
    setRepeatOne(!repeatOne);
    repeatOneRef.current.style.setProperty(
      "color",
      `${!repeatOne ? "#5f27cd" : "#C7C5D0"}`
    );
  };

  // Toggle Repeat Button color
  const handleRepeat = (e) => {
    setRepeat(!repeat);
    repeatRef.current.style.setProperty(
      "color",
      `${!repeat ? "#5f27cd" : "#C7C5D0"}`
    );
  };

  return (
    <ControlBox>
      <Switch>
        <Toggle ref={shuffleRef}>
          <BiShuffle onClick={handleShuffle} />
        </Toggle>
        <Toggle ref={repeatOneRef}>
          <RiRepeatOneFill onClick={handleRepeatOne} />
        </Toggle>
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
        <Toggle ref={repeatRef}>
          <RiRepeat2Fill onClick={handleRepeat} />
        </Toggle>
        <Toggle>
          <ImEqualizer2 />
        </Toggle>
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

const Toggle = styled.span`
  &:hover {
    color: #999;
    transition: all 0.2s ease;
  }
  &:active {
    color: #5f27cd;
  }
`;
