import styled from "styled-components";

const InfoContainer = () => {
  return (
    <Info>
      <h1>Music Player</h1>
    </Info>
  );
};

export default InfoContainer;

const Info = styled.div`
  background: #f8f8f8;
  height: 257px;
  width: 436px;
  z-index: 1;
  border-radius: 33px;
  padding: 27px;
`;
