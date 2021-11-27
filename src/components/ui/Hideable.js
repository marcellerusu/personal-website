import styled from "styled-components";

const Hideable = styled.div`
  position: relative;
  transition: opacity 600ms ease-in-out;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  height: ${({ visible }) => (visible ? "unset" : 0)};
  z-index: ${({ visible }) => (visible ? 10 : -10)};
  overflow: hidden;
`;

export default Hideable;
