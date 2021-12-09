import { useState, useRef } from "react";
import { RiHeartFill, RiPlayListAddFill, RiShareFill } from "react-icons/ri";
import styled from "styled-components";
import Purple from "../../data/Purple.jpg";

const InfoContainer = () => {
  const [favorite, setfavorite] = useState(false);
  const [playlist, setPlaylist] = useState(false);
  const circle1Ref = useRef();
  const circle2Ref = useRef();

  const handleFavorite = (e) => {
    setfavorite(!favorite);
    circle1Ref.current.style.setProperty(
      "color",
      `${!favorite ? "#5f27cd" : "#C7C5D0"}`
    );
  };

  const handlePlaylist = (e) => {
    setPlaylist(!playlist);
    circle2Ref.current.style.setProperty(
      "color",
      `${!playlist ? "#5f27cd" : "#C7C5D0"}`
    );
  };

  return (
    <Info>
      <Data>
        <Span>
          <img src={Purple} alt="Purple Haze cover" />
        </Span>
      </Data>
      <Data>
        <div>
          <p>Now Playing</p>
        </div>
        <div>
          <h3>Purple Haze</h3>
          <Name>Jimi Hendrix</Name>
          <p>Woodstock </p>
        </div>
        <Links>
          <Circle ref={circle1Ref} onClick={handleFavorite}>
            <RiHeartFill />
          </Circle>
          <Circle ref={circle2Ref} onClick={handlePlaylist}>
            <RiPlayListAddFill />
          </Circle>
          <Circle>
            <RiShareFill />
          </Circle>
        </Links>
      </Data>
    </Info>
  );
};

export default InfoContainer;

const Info = styled.div`
  background: #f8f8f8;
  height: 257px;
  width: 436px;
  z-index: 1;
  border: 1px solid #ffffff;
  border-radius: 33px;
  // box-shadow: 20px 20px 60px #c0bcd9, -20px -20px 60px #fffeff;
  box-shadow: 22px 16px 44px rgba(54, 48, 116, 0.3);
  display: flex;

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
  }
  @media (max-width: 414px) {
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
  }
`;

const Data = styled.div`
  flex: 1;
  padding: 27px 0 27px 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3,
  p {
    margin: 0;
    @media (max-width: 414px) {
      margin: 2px;
    }
  }

  h3 {
    color: #86748d;
    font-size: 17px;
  }

  img {
    width: 100%;
    border-radius: 16px;
    box-shadow: inset 5px 5px 8px rgba(255, 255, 255, 0.2),
      2.5px 2.5px 5px rgba(37, 5, 57, 0.51);
  }

  @media (max-width: 414px) {
    padding: 0px;
    text-align: center;
    width: 100%;
  }
`;

const Span = styled.span`
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 22px;
  overflow: hidden;
  padding: 6px;
  // box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
  //   inset -5px -5px 11px #ffffff, inset 5px 5px 5px rgba(0, 0, 0, 0.05),
  //   inset -5px -5px 11px #ffffff;

  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.05),
    inset -5px -5px 11px #ffffff, -5px -5px 8px #ffffff,
    5px 5px 5px rgba(0, 0, 0, 0.05);
`;

const Name = styled.p`
  font-size: 14px;
`;

const Circle = styled.span`
  cursor: pointer;
  height: 25px;
  width: 25px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  border-radius: 100%;
  text-align: center;
  font-size: 14px;
  transition: all 0.3 ease;
  color: var(--secondary);
  box-shadow: -5px -5px 8px #ffffff, 5px 5px 5px rgba(0, 0, 0, 0.05),
    inset 5px 5px 5px rgba(0, 0, 0, 0.05), inset -5px -5px 11px #ffffff;

  &:active {
    box-shadow: inset -5px -5px 8px #ffffff,
      inset 5px 5px 5px rgba(0, 0, 0, 0.05);
    color: #5f27cd;
  }

  // &:hover {
  //   color: #999;
  //   transition: all 0.3s ease;
  // }
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 414px) {
    justify-content: space-evenly;
    margin: 20px 0;
  }
`;
