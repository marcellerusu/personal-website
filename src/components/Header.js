import { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: margin 200ms ease, background-color 300ms ease-out 0ms;

  margin: ${({ isTop }) => (isTop ? "25px 20% 0 20%" : "0")};
  padding-top: ${({ isTop }) => (isTop ? "0" : "25px")};
  position: sticky;
  background-color: ${({ isTop }) => (isTop ? "unset" : "#000000b5")};
  color: ${({ isTop }) => (isTop ? "unset" : "white")};
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 100%;
  }
`;

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => setIsTop(window.scrollY < 10));
  }, []);
  return (
    <Container isTop={isTop}>
      <h1>Marcelle Rusu</h1>
      <hr></hr>
      <h3>Front-end Developer</h3>
    </Container>
  );
};

export default Header;
