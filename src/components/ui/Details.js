import { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";

export const Details = styled.details`
  /* ANIMATION CODE START */
  transition: height 200ms ease, background-color 300ms ease-out 0ms;
  overflow: hidden;

  &:not([open]) {
    height: ${({ min }) => min};
  }

  &[open] {
    background-color: white;
    height: ${({ max }) => max};
  }
  &:hover {
    background-color: white;
  }
  /* ANIMATION CODE END */

  /* SAFARI ISSUES START */
  summary {
    > * {
      display: inline;
    }
    &:focus {
      outline: none;
    }
    &::-webkit-details-marker {
      background: none;
      color: transparent;
      width: 0;
      margin: 0;
    }
  }
  /* SAFARI ISSUES END */

  > * {
    margin: 0 20% 0 20%;
  }
  summary {
    list-style: none;
    h3 {
      z-index: 2;
      font-size: 27px;
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
    cursor: pointer;
    div {
      z-index: 2;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

// This is a hack! :(
// Basically, animating the <details> open/close is hard
// The approach I'm taking is to re-set the heights in <Details>
// via `max` & `min` props. But calculating `max` is hard.
// It needs to be visible for `offsetHeight` to be not 0.
// And if we want it to have the same height as it would on page
// we need to clone the element & temporarily open it.
// We also need to re-try calculateHeights, because fonts can take some time to render
// I tested rel="preload" & document.fonts.ready api, both didn't have an impact
export const useActualHeights = () => {
  const detailsRef = useRef(null);
  const [[min, max], setHeights] = useState(["auto", "180px"]);
  const [[screenWidth, screenHeight], setScreenDimensions] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    window.addEventListener("resize", () =>
      setScreenDimensions([window.innerWidth, window.innerHeight])
    );
  }, []);
  useEffect(
    function calculateHeights([prevMin, prevMax] = []) {
      if (!detailsRef.current) return;
      const details = detailsRef.current;
      const content = details.querySelector("article");
      const summary = details.querySelector("summary");

      // hack to make the element visible with the appropriate styles
      // so we can calculate the content height
      const clone = details.cloneNode(true);
      document.querySelector("#main").append(clone);
      clone.open = true;
      clone.append(content);
      const [min, max] = [
        `${summary.offsetHeight}px`,
        `${summary.offsetHeight + content.offsetHeight}px`,
      ];
      setHeights([min, max]);
      // add back the content
      details.append(content);
      clone.remove();
      if (prevMin === min && prevMax === max) return;
      else setTimeout(() => calculateHeights([min, max]), 200);
    },
    [detailsRef, screenWidth, screenHeight]
  );
  return [detailsRef, min, max];
};

const DetailsComponent = ({ children }) => {
  const [ref, min, max] = useActualHeights();
  return (
    <Details ref={ref} min={min} max={max}>
      {children}
    </Details>
  );
};

export const Content = styled.article`
  font-size: 17px;
`;

export default DetailsComponent;
