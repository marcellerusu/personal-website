import styled from "styled-components";

export default styled.div`
  display: inline;
  background-color: ${({ active }) => (active ? "#fdff328f" : "unset")};
`;
