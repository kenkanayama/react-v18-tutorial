import { useState } from "react";

const Child = (props) => {
  return (
    <>
      <span>{props.state.value}</span>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });
  const increment = () => {
    //setState({ value: state.value + 1 })
    setState(prev => {
      const newState = { value: prev.value + 1 }
      return newState;
    })
  }
  return (
    <>
      <div>
        <Child state={state}/>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Example;
