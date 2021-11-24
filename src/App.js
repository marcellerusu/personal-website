import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 27px;
  }
  * {
    margin: 0;
    padding: 0;
  }
`;

const Header = styled.div`
  margin: 25px 20% 0 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  hr {
    width: 100%;
  }
`;

const Body = styled.div``;

const Row = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 20px;
`;
const Skills = styled.div`
  margin: 25px 20% 0 20%;

  display: flex;
  margin-bottom: 20px;
`;

const Key = styled.div`
  width: 200px;
`;
const Value = styled.div``;
const SkillItem = styled.a`
  color: unset;
  &:active {
    color: gray;
  }

  &:hover {
  }
`;

const Comma = styled.div`
  margin-right: 5px;
`;

const Details = styled.details`
  transition: background-color 250ms ease-out 20ms;
  &:hover {
    background-color: white;
  }
  summary {
    margin: 0 20% 0 20%;

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
      font-style: italic;
    }
  }
  > div {
    margin: 0 20% 0 20%;
  }
`;

const Item = ({ title, position, dateRange, children }) => {
  return (
    <Details>
      <summary>
        <h3>{title}</h3>
        <div>
          <p>{position}</p>
          <p>{dateRange}</p>
        </div>
      </summary>
      <div>{children}</div>
    </Details>
  );
};

function App() {
  const skills = [
    ["JavaScript", "React", "TypeScript", "Elm", "Node"],
    ["SQL (MySQL, PostgreSQL)", "NoSQL (Redis, Mongo)"],
  ];
  return (
    <Container>
      <Header>
        <h1>Marcelle Rusu</h1>
        <hr></hr>
        <h3>Front-end Developer</h3>
      </Header>
      {/* <div>
        <Key>
          <h3>Summary</h3>
        </Key>
        <em>
          Hi! My name is Marcelle, I use they/them pronouns & I am passionate
          about front-end, music & language design.
        </em>
      </div> */}
      <Body>
        <Skills>
          <Key>
            <h2>Skills</h2>
          </Key>
          <Value>
            <Row>
              {skills[0].map((skill) => (
                <>
                  <SkillItem href="#4" onClick={(e) => e.preventDefault()}>
                    {skill}
                  </SkillItem>
                  <Comma>,</Comma>
                </>
              ))}
            </Row>
            <Row>
              {skills[1].map((skill, i, arr) => (
                <>
                  <SkillItem href="#4" onClick={(e) => e.preventDefault()}>
                    {skill}
                  </SkillItem>
                  {i !== arr.length - 1 && <Comma>,</Comma>}
                </>
              ))}
            </Row>
          </Value>
        </Skills>
        <Item
          title="NoRedInk"
          position="Full-Stack Engineer"
          dateRange="Sept 2021 - Present"
        >
          Created
        </Item>
        <Item
          title="Vidyard"
          position="Software Developer"
          dateRange="Sept 2020 - August 2021"
        >
          Created
        </Item>
        <Item
          title="BitBakery Software"
          position="Full-Stack Developer"
          dateRange="Jan 2019 - August 2020"
        >
          Created
        </Item>
        <Item
          title="MappedIn"
          position="Software Developer (Intern)"
          dateRange="Sept 2018 - Dec 2018"
        >
          Created
        </Item>
        <Item
          title="Alida (FKA Vision Critical)"
          position="Software Developer (Intern)"
          dateRange="May 2017 - Dec 2017"
        >
          Created
        </Item>
        <Item
          title="Peacock Programming Language"
          position="Personal Project"
          dateRange="2021"
        >
          Created
        </Item>

        <Item title="Component TS" position="Personal Project" dateRange="2017">
          Created
        </Item>
      </Body>
    </Container>
  );
}

export default App;
