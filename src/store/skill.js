import { createContext } from "react";

const SkillStore = createContext();

const hidden = (skill) => ({ skill, hidden: true });
const visible = (skill) => ({ skill, hidden: false });

export const SKILLS = Object.freeze([
  {
    JavaScript: [
      visible("React"),
      hidden("Redux"),
      visible("TypeScript"),
      visible("Node.js"),
      hidden("Vue"),
      hidden("Angular"),
      hidden("Ionic"),
      hidden("Enzyme"),
    ],
    Ruby: [visible("Rails"), hidden("RSpec")],
  },
  {
    SQL: [visible("MySQL"), visible("PostgreSQL"), hidden("MS SQL")],
    NoSQL: [visible("Redis"), visible("MongoDB")],
  },
]);

const extractSkills = (obj) => {
  const newEntires = Object.entries(obj).map(([parentSkill, subSkills]) => [
    parentSkill,
    subSkills.map(({ skill }) => skill),
  ]);
  return Object.fromEntries(newEntires);
};

const FLAT_SKILLS = {
  ...extractSkills(SKILLS[0]),
  ...extractSkills(SKILLS[1]),
};

export const compare = (skillA, skillB) => {
  if (skillA === skillB) return true;
  if (
    FLAT_SKILLS[skillA]?.includes(skillB) ||
    FLAT_SKILLS[skillB]?.includes(skillA)
  ) {
    console.log(skillA, skillB);
    return true;
  }
  return false;
};

export default SkillStore;
