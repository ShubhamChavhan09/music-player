import styled from "styled-components";
import InfoContainer from "../info-container";
import Slider from "../slider";

const Container = () => {
  return (
    <Main>
      <InfoContainer />
      <Slider />
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
  position: relative;
  padding: 0 83px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
