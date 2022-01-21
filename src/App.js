import { Router } from "@reach/router";
import styled from "styled-components";

import Header from "./components/Header";
import Summary from "./pages/Summary";
import Resume from "./pages/Resume";
import Peacock from "./pages/Peacock";

const Main = styled.div`
  font-size: 20px;
  * {
    font-weight: 100;
    text-decoration-thickness: 1px;
  }
  a {
    /* needed because not all a tags here use hrefs :/ */
    text-decoration: underline;
    text-decoration-thickness: 1px;
    cursor: pointer;
    color: black;

    &:hover {
      color: gray;
    }

    &:active {
      color: #444;
    }
  }

  ul {
    margin: 0;
    list-style: url("/slash-solid.svg");
  }

  hr {
    margin: 0;
  }
  h1 {
    margin: 0;
    font-size: 60px;
  }
  h2 {
    margin: 0;
    font-size: 40px;
  }
  h3 {
    margin: 0;
    font-size: 27px;
  }
  p {
    margin: 0;
  }
`;

function App() {
  return (
    <Main id="main">
      <Header />
      <Router>
        <Summary path="/" />
        <Resume path="resume" />
        <Peacock path="peacock" />
      </Router>
    </Main>
  );
}

export default App;
