import React, { useContext } from "react";
import styled from "styled-components";
import SkillStore from "../store/skill";
import Highlight from "./ui/Highlight";
import MarginRight from "./ui/MarginRight";
import Comma from "./ui/Comma";
import { SKILLS } from "../store/skill";
import { mapSkills } from "../responsive";

const Clickable = styled.a`
  color: unset;
  &:active {
    color: gray;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

const Container = styled.div`
  margin: 10px 20% 0 20%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Item = ({ name }) => {
  const { selected, setSelected } = useContext(SkillStore);
  const onClick = (e) => {
    e.preventDefault();
    if (selected === name) {
      setSelected(null);
    } else {
      setSelected(name);
    }
  };
  return (
    <Clickable href="#" onClick={onClick}>
      <Highlight active={selected === name}>{name}</Highlight>
    </Clickable>
  );
};

const Skill = ({ skill }) => {
  if (typeof skill === "string") return <Item name={skill} />;
  const [parent, skills] = skill;
  return (
    <>
      <MarginRight>
        <Item name={parent} />
      </MarginRight>
      (
      {skills
        .filter(({ hidden }) => !hidden)
        .map(({ skill }, i, arr) => (
          <React.Fragment key={skill}>
            <Item name={skill} />
            <Comma cond={i !== arr.length - 1} />
          </React.Fragment>
        ))}
      )
    </>
  );
};

const TrailingComma = ({ cond }) => cond && <>,</>;

const SkillRow = ({ skills, trailingComma = false }) => (
  <Row>
    {Object.entries(skills).map((skill, i, arr) => (
      <React.Fragment key={skill}>
        <Skill skill={skill} />
        <TrailingComma cond={trailingComma && i === arr.length - 1} />
        <Comma cond={i !== arr.length - 1} />
      </React.Fragment>
    ))}
  </Row>
);

const Skills = () => {
  const skills = mapSkills(SKILLS);
  return (
    <Container>
      <div>
        {skills.map((row, i) => (
          <SkillRow
            key={`skill-${i}`}
            skills={row}
            trailingComma={i < skills.length - 1}
          />
        ))}
      </div>
    </Container>
  );
};

export default Skills;
