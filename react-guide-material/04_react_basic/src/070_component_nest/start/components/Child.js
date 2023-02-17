import "./Child.css";
import { List } from "./List" //.jsが省略されてもウェブパックが判断してくれている

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

export default Child;
