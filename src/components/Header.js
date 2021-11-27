import { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: margin 200ms ease-in-out, padding 200ms ease-in-out,
    background-color 300ms ease-in-out 0ms;

  margin: ${({ isTop }) => (isTop ? "25px 20% 0 20%" : "0")};
  @media (max-width: 600px) {
    margin: ${({ isTop }) => (isTop ? "25px 0 0 0" : "0")};
  }
  padding-top: ${({ isTop }) => (isTop ? "0" : "25px")};
  position: sticky;
  background-color: ${({ isTop }) => (isTop ? "unset" : "#000000b5")};
  color: ${({ isTop }) => (isTop ? "unset" : "white")};
  top: 0px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  align-items: center;
  hr {
    width: 100%;
  }
  /* Mobile */
  h1 {
    text-align: center;
    line-height: 1em;
    padding-bottom: 0.25em;
  }
`;

const ViewSource = styled.a`
  position: absolute;
  right: 0;
  font-size: 17px;
  font-style: italic;
  :visited {
    color: unset;
  }
`;

const SvgLing = styled.img`
  position: absolute;
  right: ${({ position }) => position * 25}px;
  bottom: 7.5px;
  width: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
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
      <ViewSource
        href="https://github.com/marcellerusu/marcellerusu"
        target="_blank"
      >
        view source
      </ViewSource>
      <a
        href="https://www.linkedin.com/in/marcelrusu/"
        target="_blank"
        alt="Link to LinkedIn"
      >
        <SvgLing src="/linkedin-brands.svg" position={0} />
      </a>
      <a
        href="https://www.github.com/marcellerusu"
        target="_blank"
        alt="Link to Github"
      >
        <SvgLing src="/github-brands.svg" position={1} />
      </a>
      <a href="mailto:marcelrusu@protonmail.com" alt="Link to Email">
        <SvgLing src="/envelope-solid.svg" position={2} />
      </a>

      <hr></hr>
      <h3>Front-end Developer</h3>
    </Container>
  );
};

export default Header;
