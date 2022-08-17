import { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: margin 200ms ease-in-out, padding 200ms ease-in-out,
    background-color 300ms ease-in-out 0ms;

  margin: ${({ isTop }) => (isTop ? "25px 10% 0 10%" : "0")};
  @media (max-width: 700px) {
    margin: ${({ isTop }) => (isTop ? "25px 0 0 0" : "0")};
  }
  padding-top: ${({ isTop }) => (isTop ? "0" : "25px")};
  position: sticky;
  background-color: ${({ isTop }) => (isTop ? "unset" : "#000000b5")};
  color: ${({ isTop }) => (isTop ? "unset" : "white")};
  top: 0px;
  display: flex;
  flex-direction: column;
  z-index: 2000;
  align-items: center;
  hr {
    width: 100%;
  }
  /* Mobile */
  h1 {
    text-align: center;
    line-height: 1em;
    padding-bottom: 0.25em;
    font-size: 40px;
  }
`;

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => setIsTop(window.scrollY < 10));
  }, []);
  return (
    <Container isTop={isTop}>
      <h1>Peacock - Bind Patterns</h1>
      <hr></hr>
      <h3>Marcelle Rusu | August 16 2022</h3>
    </Container>
  );
};

export default Header;
