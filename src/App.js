import { Router } from "@reach/router";
import styled from "styled-components";

import Header from "./components/Header";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";

const Main = styled.div`
  font-size: 20px;
  * {
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
  p {
    margin: 0;
  }
`;

function App() {
  return (
    <Main id="main">
      <Header />
      <Router>
        <Blog path="/blog/peacock-bind-patterns" />
        <Resume path="/resume" />
      </Router>
    </Main>
  );
}

export default App;
