import Container from "./components/container";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Container />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;
