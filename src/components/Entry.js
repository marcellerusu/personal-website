import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Details = styled.details`
  transition: background-color 250ms ease-out 0ms;
  overflow: hidden;
  &[open] {
    background-color: white;
  }
  &:hover {
    background-color: white;
  }

  > * {
    margin: 0 20% 0 20%;
  }
  summary {
    list-style: none;
    h3 {
      z-index: 2;
      font-size: 27px;
      text-decoration: underline;
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
    }
  }
`;

const ANIMATION_STATES = Object.freeze({
  CLOSED: "CLOSED",
  OPENING: "OPENING",
  OPEN: "OPEN",
  CLOSING: "CLOSING",
});

const nextState = (state) =>
  ({
    [ANIMATION_STATES.CLOSED]: ANIMATION_STATES.OPENING,
    [ANIMATION_STATES.OPENING]: ANIMATION_STATES.OPEN,
    [ANIMATION_STATES.OPEN]: ANIMATION_STATES.CLOSING,
    [ANIMATION_STATES.CLOSING]: ANIMATION_STATES.CLOSED,
  }[state]);

const isAnimating = (state) =>
  [ANIMATION_STATES.OPENING, ANIMATION_STATES.CLOSING].includes(state);

const useDetailsAnimation = () => {
  const [state, setState] = useState(ANIMATION_STATES.CLOSED);
  console.log(state);

  const detailsRef = useRef(null);
  const summaryRef = useRef(null);

  useEffect(() => {
    detailsRef.current?.addEventListener("toggle", onToggle);
  }, [detailsRef, summaryRef]);

  const details = () => detailsRef.current;
  const summary = () => summaryRef.current;

  const animate = (start, end) => {
    const animation = details().animate(
      { height: [start, end] },
      { duration: 100, easing: "ease-out" }
    );
    animation.onfinish = () => {
      setState(nextState);
      details().style.height = details().style.overflow = "";
    };
  };

  const onOpen = () => {
    details().style.height = `${details().offsetHeight}px`;
    // Force the [open] attribute on the details element
    // details().open = true;
    const [start, end] = [
      `${details().offsetHeight}px`,
      `${summary().offsetHeight}px`,
    ];
    window.requestAnimationFrame(() => animate(start, end));
  };

  const onClose = () => {
    const [start, end] = [
      `${details().offsetHeight + summary().offsetHeight}px`,
      `${summary().offsetHeight}px`,
    ];
    animate(start, end);
  };

  const onToggle = (e) => {
    e.preventDefault();
    if (isAnimating(state)) return;
    setState(nextState);
    switch (state) {
      case ANIMATION_STATES.CLOSED:
        return onOpen();
      case ANIMATION_STATES.OPEN:
        return onClose();
      default:
        throw new Error("Assert not reached!");
    }
  };

  return [detailsRef, summaryRef];
};

const Entry = ({ title, position, dateRange, children }) => {
  // const [detailsRef, summaryRef] = useDetailsAnimation();
  return (
    <Details>
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
