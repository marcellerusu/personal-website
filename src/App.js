import styled from "styled-components";
import Skills from "./Skills";

const Main = styled.div`
  font-size: 20px;
  hr {
    margin: 0;
  }
  h1 {
    margin: 0;
    font-size: 60px;
  }
  h2 {
    margin: 0;
    font-size: 40px;
  }
  h3 {
    margin: 0;
    font-size: 27px;
  }
  p {
    margin: 0;
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

const Details = styled.details`
  transition: background-color 250ms ease-out 0ms;
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
    ["JavaScript", "React", "TypeScript", "Node.js", "Ruby"],
    [
      ["SQL", ["MySQL", "PostgreSQL"]],
      ["NoSQL", ["Redis", "Mongo"]],
    ],
  ];
  return (
    <Main>
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
      <Skills skills={skills} />
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
    </Main>
  );
}

export default App;
