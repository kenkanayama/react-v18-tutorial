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
  return (
    <>
      <ul>
        {/* <Profile key="Geo" name="Geo" age={18} hobbies={["sports", "music"]} />
        <Profile key="Tom" name="Geo" age={18} hobbies={["sports", "music"]} />
        <Profile key="Lisa" name="Geo" age={18} hobbies={["sports", "music"]} /> */}
        {persons.map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
