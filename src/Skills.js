import React from "react";
import styled from "styled-components";

const MarginRight = styled.div`
  margin-right: 5px;
`;

const Comma = ({ cond }) => cond && <MarginRight>,</MarginRight>;

const Clickable = styled.a`
  color: unset;
  &:active {
    color: gray;
  }
`;

const Row = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

const Container = styled.div`
  margin: 10px 20% 0 20%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Item = ({ name }) => (
  <Clickable href="#" onClick={(e) => e.preventDefault()}>
    {name}
  </Clickable>
);

const Skill = ({ skill }) => {
  if (typeof skill === "string") return <Item name={skill} />;
  const [parent, skills] = skill;
  return (
    <>
      <MarginRight>
        <Item name={parent} />
      </MarginRight>
      (
      {skills.map((skill, i, arr) => (
        <React.Fragment key={skill}>
          <Item name={skill} />
          <Comma cond={i !== arr.length - 1} />
        </React.Fragment>
      ))}
      )
    </>
  );
};

const SkillRow = ({ skills, trailingComma = false }) => (
  <Row>
    {skills.map((skill, i, arr) => (
      <React.Fragment key={skill}>
        <Skill skill={skill} />
        <Comma cond={trailingComma || i !== arr.length - 1} />
      </React.Fragment>
    ))}
  </Row>
);

const Skills = ({ skills: [firstRow, secondRow] }) => (
  <Container>
    <div>
      <SkillRow skills={firstRow} trailingComma={true} />
      <SkillRow skills={secondRow} />
    </div>
  </Container>
);

export default Skills;
