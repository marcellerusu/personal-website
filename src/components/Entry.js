import styled from "styled-components";

const Details = styled.details`
  transition: background-color 250ms ease-out 0ms;
  /* transition: height 1s ease; */
  overflow: hidden;

  /* &:not([open]) {
    height: auto;
  } */

  &[open] {
    background-color: white;
    /* height: 10em; */
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

const Entry = ({ title, position, dateRange, children }) => {
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
