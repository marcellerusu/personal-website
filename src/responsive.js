import { isMobile } from "react-device-detect";

const exceptions = ["Component TS"];

export const mapTitle = (str) => {
  if (isMobile) {
    if (exceptions.includes(str)) return str;
    return str.split(" ")[0];
  }
  return str;
};

export const mapSkills = (skills) => {
  if (isMobile) {
    return [
      { JavaScript: skills[0].JavaScript },
      { SQL: skills[1].SQL },
      { NoSQL: skills[1].NoSQL },
      { Ruby: skills[0].Ruby },
    ];
  }
  return skills;
};
