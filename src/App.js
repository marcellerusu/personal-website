import styled from "styled-components";
import Skills from "./components/Skills";
import Entry from "./components/Entry";

const Main = styled.div`
  font-size: 20px;
  * {
    font-weight: 100;
    text-decoration-thickness: 1px;
  }
  ul {
    margin: 0;
    list-style: none;
  }

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

function App() {
  const skills = [
    ["JavaScript", "React", "TypeScript", "Node.js", ["Ruby", ["Rails"]]],
    [
      ["SQL", ["MySQL", "PostgreSQL"]],
      ["NoSQL", ["Redis", "Mongo"]],
    ],
  ];
  return (
    <Main id="main">
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
      <Entry
        title="NoRedInk"
        position="Full-Stack Engineer"
        dateRange="Sept 2021 - Present"
      >
        <ul>
          <li>
            Worked on a tightly-coupled 3rd party integration with Schoology
            that was developed from start to pilot in 2 months
          </li>
          <li>Wrote & recorded original song for NoRedInk tech podcast :)</li>
        </ul>
        <p>[Elm, Haskell, Rails, MySQL, Nix, Git]</p>
      </Entry>
      <Entry
        title="Vidyard"
        position="Software Developer"
        dateRange="Sept 2020 - August 2021"
      >
        <ul>
          <li>
            Worked on a growth team to develop many concurrent feature-gated
            experiments to increase Activation rates
          </li>
          <li>
            Implemented a LinkedIn injection which enabled users to record &
            send videos from within the native LinkedIn chat UI
          </li>
        </ul>
        <p>[Rails, Vue, React, LaunchDarkly, MySQL, Git]</p>
      </Entry>
      <Entry
        title="BitBakery Software"
        position="Full-Stack Developer"
        dateRange="Jan 2019 - August 2020"
      >
        <ul>
          <li>
            Maintained and developed browser based mobile and web apps for
            various clients
          </li>
          <li>
            Led migration of components from a mature server-rendered project
            written in Jade/Pug to React
          </li>
        </ul>
        <p>[React, Angular, Vue, MongoDB, MySQL, Ionic, Node.js, Rails, Git]</p>
      </Entry>
      <Entry
        title="MappedIn"
        position="Software Developer (Intern)"
        dateRange="Sept 2018 - Dec 2018"
      >
        <ul>
          <li>
            Worked primarily on a content management system developed to serve
            indoor map maintainers
          </li>
          <li>Migrated legacy state management to Redux</li>
        </ul>
        <p>[React, Redux, MongoDB, Git, Node.js, Enzyme]</p>
      </Entry>
      <Entry
        title="Alida (FKA Vision Critical)"
        position="Software Developer (Intern)"
        dateRange="May 2017 - Dec 2017"
      >
        <ul>
          <li>
            Merged features of an acquired company (Pressly) into Vision
            Critical’s product
          </li>
          <li>
            Built automated process of upgrading customers to use features of
            the acquired company (Pressly)
          </li>
        </ul>
        <p>[C#, React, MS SQL, .NET, Git, NUnit]</p>
      </Entry>
      <Entry
        title="Peacock Programming Language"
        position="Personal Project"
        dateRange="2021"
      >
        <ul>
          <li>
            "Create front-end applications with powerful/declarative run-time
            assertions & concise view functions"
          </li>
          <li>
            Designed implemented front-end language inspired by Clojure, Elixir,
            Ruby & ML
          </li>
        </ul>
        <p>[Ruby, RSpec, JavaScript]</p>
      </Entry>
      <Entry title="Component TS" position="Personal Project" dateRange="2017">
        <ul>
          <li>
            Front-end library influenced by Elm to make functional style web
            applications in TypeScript
          </li>
          <li>
            Created to learn more about how front end libraries work & to see if
            TypeScript's type system was powerful enough to express TEA (the elm
            architecture)
          </li>
        </ul>
        <p>[TypeScript]</p>
      </Entry>
    </Main>
  );
}

export default App;
