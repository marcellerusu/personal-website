import styled from "styled-components";

const Container = styled.div`
  margin: 0 20% 0 20%;
  display: flex;
  flex-direction: column;
`;

const DismissButton = styled.a`
  font-style: italic;
  font-size: 25px;
  margin: auto;
  margin-top: 100px;
`;

const Summary = ({ onDismiss }) => {
  return (
    <Container>
      <h3>Summary</h3>
      <em>
        Hi! My name is Marcelle, I use they/them pronouns, I'm passionate about
        front-end, music & language design.
      </em>
      <em>Blah blah, I am very good, hire me please...</em>
      <DismissButton onClick={() => onDismiss(false)}>
        view experience
      </DismissButton>
    </Container>
  );
};

export default Summary;
