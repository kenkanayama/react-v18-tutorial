import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];


const Example = () => {
  const [fileterVal, setFileterVal] = useState("");
  return (
    <>
    <input type="text" value={fileterVal} onChange={(e) => setFileterVal(e.target.value)}/>
      <ul>
        {persons
        .filter(person => {
          const isMatch = person.name.indexOf(fileterVal) !== -1;
          console.log(isMatch);
          console.log(person.name.indexOf(fileterVal));
          return isMatch;
        })
        .map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
