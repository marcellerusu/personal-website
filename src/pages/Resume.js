import { useState } from "react";

import SkillStore from "../store/skill";
import Entry from "../components/Entry";
import Skills from "../components/Skills";
import { Link } from "@reach/router";

const Resume = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  return (
    <div>
      <SkillStore.Provider
        value={{ selected: selectedSkill, setSelected: setSelectedSkill }}
      >
        <Skills />
        <Entry
          title="NoRedInk"
          position="Full-Stack Engineer"
          dateRange="Sept 2021 - Present"
          skills={["Elm", "Haskell", "Rails", "MySQL", "Nix", "Git"]}
        >
          <ul>
            <li>
              Worked on a tightly-coupled 3rd party integration with Schoology
              that was developed from start to pilot in 2 months
            </li>
          </ul>
        </Entry>
        <Entry
          title="Vidyard"
          position="Software Developer"
          dateRange="Sept 2020 - August 2021"
          skills={["Rails", "Vue", "React", "LaunchDarkly", "MySQL", "Git"]}
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
        </Entry>
        <Entry
          title="BitBakery Software"
          position="Full-Stack Developer"
          dateRange="Jan 2019 - August 2020"
          skills={[
            "React",
            "Vue",
            "MongoDB",
            "MySQL",
            "Node.js",
            "Rails",
            "Git",
          ]}
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
        </Entry>
        <Entry
          title="MappedIn"
          position="Software Developer (Intern)"
          dateRange="Sept 2018 - Dec 2018"
          skills={["React", "Redux", "MongoDB", "Git", "Node.js", "Enzyme"]}
        >
          <ul>
            <li>
              Worked primarily on a content management system developed to serve
              indoor map maintainers
            </li>
            <li>Migrated legacy state management to Redux</li>
          </ul>
        </Entry>
        <Entry
          title="Alida (FKA Vision Critical)"
          position="Software Developer (Intern)"
          dateRange="May 2017 - Dec 2017"
          skills={["C#", "React", "MS SQL", ".NET", "Git", "NUnit"]}
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
        </Entry>
        <Entry
          title="Peacock Programming Language"
          position="Personal Project"
          dateRange="2021"
          skills={["Ruby", "RSpec", "JavaScript"]}
        >
          <ul>
            <Link to="/peacock">Try it out!</Link>

            <li>
              "Create front-end applications with powerful/declarative run-time
              assertions & concise view functions"
            </li>
            <li>
              Designed implemented front-end language inspired by Clojure,
              Elixir, Ruby & ML
            </li>
          </ul>
        </Entry>
        <Entry
          title="Component TS"
          position="Personal Project"
          dateRange="2017"
          skills={["TypeScript"]}
          lastElement
        >
          <ul>
            <li>
              Front-end library influenced by Elm to make functional style web
              applications in TypeScript
            </li>
            <li>
              Created to learn more about how front end libraries work & to see
              if TypeScript's type system was powerful enough to express TEA
              (the elm architecture)
            </li>
          </ul>
        </Entry>
      </SkillStore.Provider>
    </div>
  );
};
export default Resume;
