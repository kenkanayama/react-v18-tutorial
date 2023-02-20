import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    const o = {
        color: "blue",
        num: 123
    }
    return (
        <>
            <Child
                {...o}//スプレッド演算子
                // color="red"
                // num={123}
                fn={hello}
                bool
                obj={{ name : "tom", age:18}}
            />
            {/* <Child color=""/>
            <Child color="red"/>
            <Child /> */}
        </>
    )
};

export default Example;
