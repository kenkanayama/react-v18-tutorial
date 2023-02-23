const Hello = (props) => {
  const desc = Reflect.getOwnPropertyDescriptor(props, 'name');
  //これでオブジェクトの設定を確認することができる。
  console.log(desc);
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;