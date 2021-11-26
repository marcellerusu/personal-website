import { createContext } from "react";

const SkillStore = createContext();

export const SKILLS = Object.freeze([
  [
    ["JavaScript", ["React", "TypeScript", "Node.js"]],
    ["Ruby", ["Rails"]],
  ],
  [
    ["SQL", ["MySQL", "PostgreSQL"]],
    ["NoSQL", ["Redis", "Mongo"]],
  ],
]);

// const findParent = (skill, arr = SKILLS, parent = null) => {
//   if (arr.some((otherSkill) => otherSkill === skill)) {
//     return parent;
//   } else {
//     return arr.map(([parent, subSkills]) =>
//       findParent(skill, subSkills, parent)
//     )[0];
//   }
// };

export const compare = (skillA, skillB, reversed = false) => {
  return skillA === skillB;
  // if (skillA === skillB) return true;
  // if (findParent(skillA) === skillB) return true;
  // if (reversed) return false;
  // return compare(skillB, skillA, true);
};

export default SkillStore;
