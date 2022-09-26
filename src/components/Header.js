import { createContext, useContext, useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: margin 200ms ease-in-out, padding 200ms ease-in-out,
    background-color 300ms ease-in-out 0ms;

  margin: ${({ isTop }) => (isTop ? "25px 10% 0 10%" : "0")};
  position: sticky;
  @media (max-width: 700px) {
    margin: ${({ isTop }) => (isTop ? "25px 0 0 0" : "0")};
    position: unset;
  }
  padding-top: ${({ isTop }) => (isTop ? "0" : "25px")};
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
`;

export let header = createContext(["", () => {}]);
export let subHeader = createContext(["", () => {}]);

const Header = () => {
  const [isTop, setIsTop] = useState(true);
  let [header_] = useContext(header);
  let [subHeader_] = useContext(subHeader);
  console.log(header_);
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => setIsTop(window.scrollY < 10));
  }, []);
  return (
    <Container isTop={isTop}>
      <h1>{header_}</h1>
      <hr></hr>
      <h3>{subHeader_}</h3>
    </Container>
  );
};

export default Header;
