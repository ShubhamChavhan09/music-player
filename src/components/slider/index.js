import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Purple from "../../data/purple-haze.mp3";
import Controls from "../controls";

const Slider = () => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //referrence
  const audioPlayer = useRef(); // for audio component
  const progressBar = useRef(); // referrence to progress bar
  const animationRef = useRef(); // referrence to animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    changePlayerCurrentTime();
    // eslint-disable-next-line
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // Calculate time to show in mm:ss
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  // Toggle Play / Pause track
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  // Changing Seek Bar width
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-width",
      `${
        (progressBar.current.value / Math.floor(audioPlayer.current.duration)) *
        100
      }%`
    );
    setCurrentTime(progressBar.current.value);
    console.log(audioPlayer.current.duration);
  };

  // Forward track by 10sec
  const forwardTen = () => {
    progressBar.current.value = Number(progressBar.current.value) + 10;
    changeRange();
  };

  //Move songs back by 10sec
  const backTen = () => {
    progressBar.current.value = Number(progressBar.current.value) - 10;
    changeRange();
  };

  return (
    <Wrapper>
      <Player>
        <audio ref={audioPlayer} src={Purple} preload="metadata"></audio>
        <Controls
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
          backTen={backTen}
          forwardTen={forwardTen}
        />
        <div>
          <Time>
            <ProgressBar
              type="range"
              defaultValue="0"
              ref={progressBar}
              onChange={changeRange}
            />
          </Time>
          <Time>
            {/* current time */}
            <div>
              <p>{calculateTime(currentTime)}</p>
            </div>

            {/* duration  */}
            <p>{!isNaN(duration) && calculateTime(duration)}</p>
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
    top: 375px;
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

  // Seek Bar
  &::before {
    content: "";
    height: 3px;
    width: var(--seek-width);
    background: linear-gradient(327.56deg, #5d24d6 19.23%, #7e74ed 81.76%);
    border-radius: 20px;
    position: absolute;
    top: 2.5px;
    left: 0;
    z-index: 2;
    cursor: pointer;
    box-shadow: 0px 2px 3px rgba(43, 72, 180, 0.4) inset 1px 1px 3px
      rgba(255, 255, 255, 0.4);
  }

  // for firefox

  &::-moz-range-track {
    background: #dedde3;
    position: relative;
    height: 9px;
    outline: none;
    border-radius: 20px;
  }

  &::-moz-foucs-outer {
    border: 0;
  }

  // progress bar firefox

  &::-moz-range-progress {
    background: linear-gradient(327.56deg, #5d24d6 19.23%, #7e74ed 81.76%);
    border-radius: 20px;
    height: 3px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 14px;
    width: 14px;
    border: 4px solid #dedde3;
    background: linear-gradient(327.56deg, #5d24d6 19.23%, #7e74ed 81.76%);
    border-radius: 100%;
    padding: 8px;
    position: relative;
    z-index: 2;
    margin: -2px 0 0 0;
    box-shadow: 0px 3px 5px rgba(98, 75, 242, 0.63),
      inset 10px 10px 15px rgba(255, 255, 255, 0.2);
  }

  &:active::-webkit-slider-thumb {
    transform: scale(1.1);
    background: linear-gradient(270deg, #5d24d6, #7e74ed);
  }
`;
