import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);
    const countUp = () => {
        setCount(count + 1);
        setCount(prevstate => {
            return prevstate + 1
        });
        console.log(count);
    }
    const countDown = () => {
        setCount(count - 1);
    }
    return (
        <>
            <p>現在のカウント数: {count}</p>
            {/* <button onClick={() => {
                setCount(count + 1);
            }}>+</button>
            <button onClick={() => {
                setCount(count - 1);
            }}>-</button> */}

            <button onClick={countUp}>+</button>
            <button onClick={countDown}>-</button>

        </>
    )

};

export default Example;
