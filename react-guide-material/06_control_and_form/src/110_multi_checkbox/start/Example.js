import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const hadleChange = (e) => {
    const newFruits = fruits.map(fruit => {
      const newFruit = {...fruit }
      if(newFruit.label === e.target.value){
        newFruit.checked = !fruit.checked
      }
      return newFruit;
    })
    setFruits(newFruits);

    let sumVla = 0;
    // newFruits.forEach(fruit => {
    //   if(fruit.checked){
    //     sumVla += fruit.value
    //   }
    // });

    //以下のパターンもある
    newFruits
    .filter(fruit => fruit.checked)
    .forEach(fruit => {sumVla += fruit.value});

    setSum(sumVla)
  };

  return (
    <div>
      {fruits.map(fruit => {
        return (
          <div key={fruit.label}>
            <input
              type="checkbox"
              id={fruit.label}
              value={fruit.label}
              checked={fruit.checked}
              onChange={hadleChange}
            />
            <label htmlFor={fruit.label}>
              {fruit.label}:{fruit.value}
            </label>
          </div>
        )
      })}
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
