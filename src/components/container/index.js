import styled from "styled-components";
import ControlsContainer from "../controls-container";
import InfoContainer from "../info-container";

const Container = () => {
  return (
    <Main>
      <InfoContainer />
      <ControlsContainer />
    </Main>
  );
};

export default Container;

const Main = styled.div`
  margin: auto;
  width: 1120px;
  height: 500px;
  background: #e2ddff;
  display: flex;
  align-items: center;
  padding: 0 83px;
  position: relative;
`;
