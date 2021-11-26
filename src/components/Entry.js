import React from "react";
import styled from "styled-components";
import Details, { Content } from "./ui/Details";

const Skills = styled.div`
  text-decoration: underline dotted;
  text-decoration-thickness: 1px;
`;

const Entry = ({ title, position, dateRange, children, skills = [] }) => {
  return (
    <Details>
      <summary>
        <h3>{title}</h3>
        <div>
          <em>{position}</em>
          <em>{dateRange}</em>
        </div>
      </summary>
      <Content>
        {children}
        <Skills>[{skills.map((skill) => skill).join(", ")}]</Skills>
      </Content>
    </Details>
  );
};

export default Entry;
