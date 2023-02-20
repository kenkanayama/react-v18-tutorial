import Profile from "./components/Profile";

const profile = [
  { name: "Takashi", age: 19, country: "Japan" },
  { name: "Jane", age: 28, country: "UK" },
  { name: "John Doe", country: "Japan" },
];

const Example = () => {
  return (
    <div>
      <Profile {...profile[0]}/>
      <Profile {...profile[1]}/>
      <Profile {...profile[2]}/>
    </div>
  );
};

export default Example;
