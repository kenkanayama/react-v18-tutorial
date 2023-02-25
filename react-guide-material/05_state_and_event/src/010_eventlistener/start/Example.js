const Example = () => {
  const clickhandler = () => {
    alert('ボタンがクリックされました。')
  }

  return (
    <>
    <button onClick={clickhandler}>クリックしてね</button>
    <button onClick={() => {
    alert('ボタンがクリックされました。')
  }}>クリックしてね</button>
    </>
  );
};

export default Example;
