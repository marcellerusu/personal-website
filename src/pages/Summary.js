import styled from "styled-components";
import { Link } from "@reach/router";

const Container = styled.div`
  margin: 0 20% 0 20%;
  display: flex;
  flex-direction: column;
`;

// const Break = styled.div`
//   height: 1em;
// `;

const DismissButton = styled.div`
  font-style: italic;
  font-size: 25px;
  margin: auto;
  margin-top: 20px;
  color: black;
`;

const Summary = () => {
  return (
    <Container>
      <h3>Summary</h3>
      <hr />
      <em>Pronouns: they/them</em>
      <hr />
      <em>Hi!</em>
      <em>I am </em>
      {/* <em>
        I've spent time exploring how modern UI libraries work & currently
        developing a brand new language from the ground up for front-end. It
        borrows heavily from clojure's spec + the visual+semantic beauty of
        elixir, ruby & ml.
      </em> */}
      <DismissButton>
        <Link to="resume">view experience</Link>
      </DismissButton>
    </Container>
  );
};

export default Summary;
