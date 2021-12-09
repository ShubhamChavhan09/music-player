import React, { useState, useRef, useEffect } from "react";

import styled from "styled-components";
import Purple from "../../data/purple-haze.mp3";
import Controls from "../controls";

const Slider = () => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [seekWidth, setSeekWidth] = useState(0);

  //referrence
  const slider = useRef(); // for audio component
  const progressBar = useRef(); // referrence to progress bar
  const animationRef = useRef(); // referrence to animation

  useEffect(() => {
    const seconds = Math.floor(slider.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    changePlayerCurrentTime();
    // eslint-disable-next-line
  }, [slider?.current?.loadedmetadata, slider?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      slider.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      slider.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = slider.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    slider.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    setSeekWidth(`${(progressBar.current.value / duration) * 100 - 1.5}% `);
    setCurrentTime(progressBar.current.value);
  };

  return (
    <Wrapper>
      <Player>
        <audio ref={slider} src={Purple} preload="none"></audio>
        <Controls isPlaying={isPlaying} togglePlayPause={togglePlayPause} />
        <div>
          <Time>
            <ProgressBar
              type="range"
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
            <Run style={{ width: `${seekWidth}` }}></Run>
          </Time>
          <Time>
            {/* current time */}
            <div>
              <p>{calculateTime(currentTime)}</p>
            </div>

            {/* duration  */}
            <p>{!isNaN(duration) && duration && calculateTime(duration)}</p>
          </Time>
        </div>
      </Player>
    </Wrapper>
  );
};

export default Slider;

const Wrapper = styled.div`
  background: #f6f6f6;
  border: 1px solid #ffffff;
  width: 580px;
  height: 200px;
  position: absolute;
  border-radius: 33px;
  right: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 33px 55px rgba(65, 44, 100, 0.3);

  @media (max-width: 768px) {
    top: 255px;
    right: 0;
    width: 100%;
  }

  @media (max-width: 414px) {
    width: 100%;
    inset: 0;
    top: 420px;
    padding-top: 20px;
    height: 220px;
  }
`;

const Player = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  @media (max-width: 414px) {
    & > div {
      width: 100%;
    }
  }
`;

const Time = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 414px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const ProgressBar = styled.input`
  appearance: none;
  background: #dedde3;
  position: relative;
  height: 9px;
  outline: none;
  border-radius: 20px;
  width: 400px;
  box-shadow: -1.5px -1.5px 2.5px #ffffff, 1.5px 1.5px 2.5px rgba(0, 0, 0, 0.05),
    inset 1.5px 1.5px 5px rgba(0, 0, 0, 0.05), inset -1.5px -1.5px 2.5px #ffffff;

  // for firefox

  &::-moz-range-track {
    background: #dedde3;
    position: relative;
    height: 11px;
    outline: none;
    border-radius: 20px;
  }

  &::-moz-foucs-outer {
    border: 0;
  }

  // progress bar firefox

  &::-moz-range-progress {
    background: linear-gradient(270deg, #5d24d6, #7e74ed);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 11px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 14px;
    width: 14px;
    border: 4px solid #ffffff;
    background: linear-gradient(327.56deg, #5d24d6 19.23%, #7e74ed 81.76%);
    border-radius: 100%;
    padding: 8px;
    position: relative;
    z-index: 1;
    margin: -2px 0 0 0;
    box-shadow: 0px 3px 5px rgba(98, 75, 242, 0.63),
      inset 10px 10px 15px rgba(255, 255, 255, 0.2);
  }

  &:active::-webkit-slider-thumb {
    transform: scale(1.1);
    background: linear-gradient(270deg, #5d24d6, #7e74ed);
  }
`;

const Run = styled.div`
  height: 3px;
  width: 0;
  background: linear-gradient(327.56deg, #5d24d6 19.23%, #7e74ed 81.76%);
  position: absolute;
  top: 5px;
  left: 4px;
  border-radius: 20px;
  z-index: 0;
  box-shadow: 0px 2px 3px rgba(43, 72, 180, 0.4),
    inset 1px 1px 3px rgba(255, 255, 255, 0.4);
  overflow: hidden;
  cursor: pointer;
`;