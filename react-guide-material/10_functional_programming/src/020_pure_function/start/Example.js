const Example = () => {
  // 関数型（純粋関数）
  // POINT fn(決まった引数) -> 決まった戻り値
  // POINT 関数外の状態（データ）は参照・変更しない。
  // POINT 関数外に影響を及ぼさない。
  // ・引数で渡された値を変更しない。
  // 不変性()
  // 上記の要件を満たさない操作は「副作用」と呼ぶ。

  const val1 = 3, val2 = 9;
  let result;

  // 以下は上記の条件に当てはまらないので純粋関数ではない。スコープ外のval2によって返却値が変わるため。外部スコープの値によって結果が変わるのは純粋関数ではない。
  // 関数外のresultにも影響を与えているので純粋関数ではない。
  // ただ、現実の開発で純粋関数とさせるのは難しいものではある。論理的な要件は上記になる。
  const add = (val1) => {
    console.log(val1);
    result = val1 + val2;
    return val1 + val2;
  }

  return (
    <>
      <div>純粋関数:{add(val1)}</div>
    </>
  );
};

export default Example;
