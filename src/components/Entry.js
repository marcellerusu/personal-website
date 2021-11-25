import React, { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Details = styled.details`
  /* ANIMATION CODE START */
  transition: height 200ms ease, background-color 250ms ease-out 0ms;
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
    &:hover {
      cursor: pointer;
    }
    div {
      z-index: 2;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  /* {children} */
  > div {
    font-size: 17px;
    p {
      text-decoration: underline dotted;
      text-decoration-thickness: 1px;
    }
  }
`;

// This is a hack! :(
// Basically, animating the <details> open/close is hard
// The approach I'm taking is to re-set the widths in <Details>
// via `max` & `min` props. But calculating `max` is very hard.
// It needs to be visible for `offsetHeight` to be not 0.
// And if we want it to have the same height as it would on page
// we need to clone the element & temporarily open it.
const useActualHeight = (detailsRef) => {
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
  useEffect(() => {
    if (!detailsRef.current) return;
    const details = detailsRef.current;
    const content = details.querySelector(":scope > div");
    // hack to make the element visible so we can calculate the content height
    const clone = details.cloneNode(true);
    document.querySelector("#main").append(clone);
    clone.open = true;
    clone.append(content);
    setHeights([
      `${details.offsetHeight}px`,
      `${details.offsetHeight + content.offsetHeight}px`,
    ]);
    details.append(content);
    clone.remove();
  }, [detailsRef, screenWidth, screenHeight]);
  return [min, max];
};

const Entry = ({ title, position, dateRange, children }) => {
  const detailsRef = useRef(null);
  const [min, max] = useActualHeight(detailsRef);
  return (
    <Details ref={detailsRef} min={min} max={max}>
      <summary>
        <h3>{title}</h3>
        <div>
          <em>{position}</em>
          <em>{dateRange}</em>
        </div>
      </summary>
      <div>{children}</div>
    </Details>
  );
};

export default Entry;
