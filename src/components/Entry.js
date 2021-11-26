import React, { useContext } from "react";
import styled from "styled-components";
import Details, { Content } from "./ui/Details";
import SkillStore, { compare as compareSkills } from "../store/skill";
import Highlight from "./ui/Highlight";
import Comma from "./ui/Comma";

const Skills = styled.div`
  text-decoration: underline dotted;
  text-decoration-thickness: 1px;
`;

const Entry = ({ title, position, dateRange, children, skills = [] }) => {
  const { selected } = useContext(SkillStore);
  return (
    <Details open={skills.includes(selected)}>
      <summary>
        <h3>{title}</h3>
        <div>
          <em>{position}</em>
          <em>{dateRange}</em>
        </div>
      </summary>
      <Content>
        {children}
        <Skills>
          [
          {skills.map((skill, i, arr) => (
            <>
              <Highlight active={compareSkills(selected, skill)}>
                {skill}
              </Highlight>
              <Comma cond={i < arr.length - 1} />
            </>
          ))}
          ]
        </Skills>
      </Content>
    </Details>
  );
};

export default Entry;
