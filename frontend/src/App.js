import React from "react";
import styled from "styled-components";
import Menu from "./components/Menu.jsx";
import Navbar from "./components/Navbar.jsx";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div``;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>video cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
