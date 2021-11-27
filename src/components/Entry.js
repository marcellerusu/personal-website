import React, { useContext } from "react";
import styled from "styled-components";
import Details, { Content } from "./ui/Details";
import SkillStore, { compare as compareSkills } from "../store/skill";
import Highlight from "./ui/Highlight";
import Comma from "./ui/Comma";
import { mapTitle } from "../misc/responsive";

const Skills = styled.div`
  @media (max-width: 600px) {
    font-size: 15px;
  }
  text-decoration: underline dotted;
  text-decoration-thickness: 1px;
`;

const Entry = ({ title, position, dateRange, children, skills = [] }) => {
  title = mapTitle(title);
  const { selected } = useContext(SkillStore);
  return (
    <Details open={skills.some((skill) => compareSkills(selected, skill))}>
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
            <React.Fragment key={skill}>
              <Highlight active={compareSkills(selected, skill)}>
                {skill}
              </Highlight>
              <Comma cond={i < arr.length - 1} />
            </React.Fragment>
          ))}
          ]
        </Skills>
      </Content>
    </Details>
  );
};

export default Entry;
