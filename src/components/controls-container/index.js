import styled from "styled-components";
import Slider from "../slider";

const ControlsContainer = () => {
  return (
    <Wrapper>
      <div></div>
      <div>
        <Slider />
      </div>
    </Wrapper>
  );
};

export default ControlsContainer;
const Wrapper = styled.div`
  background: #f6f6f6;
  width: 580px;
  height: 200px;
  position: absolute;
  border-radius: 33px;
  right: 5rem;
`;
