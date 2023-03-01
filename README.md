>docker-compose build --no-cache

>docker-compose up --build

04_react_basic で勉強中（2023-02-15）
04_react_basic にて npm install, npm start

reactでは className という属性を使う（react独特）JavaScriptのClassキーワードと混在しないように(16からはclassでもいけるが、慣習みたいなもの)

コンポーネントを読み込む際、読み込むスクリプトが　default export の場合、読み込む側は任意の名前にして読み込むことができる。
そもそもdfault export するスクリプト側で名前をつけなくてもいいが、一般的にはつける。名前付きエクスポートも、英知した時点でexport とすれば読み込める。どっち使ってもいい。
今回は最後に舐め付きエクスポートを使う。
一つのファイルに一つのコンポーネントが一般的。なので基本的にはデフォルトエクスポートでいい。なんらかの理由で複数のコンポーネントを出力する必要がある場合は名前付きエクスポートを使うといい。

Fragment
JSXの要素は一つに束ねられていないといけない。ルート要素。divで一番齟齬側をくくればいいちゃいい。ただ無駄にdivタグを挟むことになる。書きたくない、余計やタブを出したくない場合にFragmentというコンポーネントを使う。
import React from "react"; であれば　<React.Fragment> で括る。　import { Fragment } from "react";　であれば<Fragment>で括る。
しかしFragment は　<></>でも使用でき、その場合はimport を書く必要もない。あと属性（classNmaeとか）はk本的にはつけられない。一つだけつけられる。keyという属性。keyがつく場合はFlagmentという文字列は省略できない。

JSXでは波括弧でJSを埋め込むことができる。式を埋め込める。文は無理。

式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。

propsは監修的に使う名前。値の分割代入もできるがこれはreactの機能ではなくJavascriptの機能.
props受け取る側でデフォルト値の設定も可能。({props : p = "red"})みたいに変数名を変えることもできる。
渡す側は　ドット3つのスプレッド演算子で渡すこともできる。渡す側ですでにオブジェクト側で値を持っている場合に使うと記述量が減って便利

コンポーネントの子要素は props.children に渡る
コンポーネントが子要素を持つ場合、props.children という特別なプロパティとして受け渡されます。
コンポーネント名の終了タグをつけて作成する場合と、そうではなくこれまで（勉強したように）propsを渡すように変数名を指定してコンポーネントを渡す、という方法がある。
前者の場合で同じコンポーネントをchildrenとして渡す場合はそれぞれに一意のkeyを設定する必要がある。kyeについて詳しくは後日。

propsの流れは一方通行で、受け取った箇所でpropsの書き換えはできない。読み取り専用。書き換えの方法はあるが後日。ただ、この基本概念はreactを支える技術で重要な概念。

以下余談だが
const desc = Reflect.getOwnPropertyDescriptor(props, 'name');第２引数では確認したいpropsの値。
└これでオブジェクトの設定を確認することができる。


JSXはJavaScriptがどのような過程でHTMLになるかというと、babelで変換されている。関数に置き換えられている。React.createElement()という関数を使われている。
JSXはJSのオブジェクトに変換される。なのでJSで行える操作はJSXにも適用できる。React要素と呼ばれる。変換は、JSX→BABELによって関数が実行されて、React要素になる。タグに挟まれているものがchildrenとなる。

コンポーネントはReact要素？React要素はReact.createElement()によって生成されるもの。なので、答えはYes。

コンポーネントにコンポーネントを入れると、子コンポーネントは検証ツールで見るとtypeという属性に入る。
ファイバーツーリー、ファイーバー要素。あまり覚えなくてもいい。興味ある人は調べればいい。
React要素のツリーと、コンポーネントツリーという言葉と構造がわかればいい。

少し復習。
ReactDOM.createRootで、rootを作って、root.render(何かしらのDOM要素)でDOMにする。
Reactはコンポーネントごとに管理する。関数コンポーネントを使うといい。propsを受け取ってJSXを返す。コンポー年おてゃ先頭小文字だと動かないので注意。コンポーネントにはpropsを渡せる。基本的に一方通行。親から子要素へ渡す。
コンポーネントにするメリットは、再利用性の向上、可読性の向上、疎結合によるバグの減少。

04_react_basic で勉強中（2023-02-15）
04_react_basic にて npm install, npm start

input 要素　とよくつかわれる
onChange 入力値の変更を検知して発火（onInputだた、ReactではonInputはonChangeで使う。JavascriptのonchangeとReactのonChangeは挙動が異なる。注意。）
onBlur　入力欄からのフォーカスが消えたことを検知
onFocus　入力欄がフォーカスされたときに検知

onMouseEnter マウスがその領域に入ってきたら発火
onMouseLeave マウスがその領域から外れたら発火

useStateは[ 値、更新用の関数 ]を返す
useState 画面を再生成する。０番目に値、1番目に更新用の関数 なので分割代入で取得することが多い。

Reactにコンポーネントの再実行（再レンダリング）をいらし新しいReact要素を作成してもらう
変更した値を保存する必要がある。state。その仕組みがuseState。
useState（React hooks）を使って、React内部に接続することができる。値の保存先がReact内部に持たれる。そして初期値（現在の値）と更新用関数、を生成する。
stateはコンポーネントごとに保持、管理される。stateを使用するとそのコンポーネントはstateの変更ごとに再レンダリング（再実行）が行われるようになる。
useStateはコンポーネントのトップレベルでしか宣言できない。（カスタムフックの中でも呼べるがそれは後日）
検証で確認できる→_owner プロパティ内のmemorizedStateプロパティ内にstateのデータが入っている。その中のnext プロパティ内に次のstateが入っている。ReactではStateの宣言の順番を保持するようになっている。
stateはただちに反映されてるわけではない。次のレンダリング時にこの値を使う、という状態を用意しているだけのため。非同期処理。再レンダリングの前に、予約をした、という感じ。
変更関数に対して関数を書くと、前回の変更関数によって更新されたvalueが引数に渡ることができる。

プリミティブ型：1, "str", bool, 10n, Symbol(), null, undefined
オブジェクト型：{}, []などのプリミティブ型以外
useStateでのオブジェクトは変更のないプロパティへの設定もする
オブジェクト型のstateを変更する場合には必ず新しいオブジェクトを作成する→辞書でキーがname とageで、変更対象がname だけでも、age 側の記載も必要（060を確認すれば理解できるはず）（新しいオブジェクトを生成するのもスプレッド演算子で生成できる）
プロパティ10個だと面倒なので、そんときにスプレット演算子を使う便利。スプレッド演算子で変更対象の値を展開後、間まで区切ってその後ろに変更対象のプロパティの変更を記載する。
またどちらでもいいが、変更対象のオブジェクトの戻り値に上記の新しいオブジェクトを返す、という記述、コールバック関数にしてあげてもいい。（068を確認すれば理解できるはず）

Reactと嘘によって
Stateが反映されるツリーの位置に注意。同じ階層、位置にある同じコンポーネントの場合、Stateはその場所で共有（参照される）
共有させないためにはdivタグを一部につけたりして別の階層とさせる。しかしそれは微妙。key　という値をコンポーネントごとに設定することで別のコンポーネントというのをState側にわからせることができる。

stateをpropsで渡すケース。親コンポーネントでstateを定義しておけば、子コンポーネントが消滅しても値を保持することができる。また特定のstateを複数の子コンポーネントで共有したい時も親で持っておくといい。

再度。（まとめ的な）
・stateを利用しないと再レンダリングが発生しない。stateを使用しないと値を保持する仕組みがない。これを可能にするのがuseStateという関数を使う。React内部に保持された値をstateと呼ぶ。
・useStateの注意点としては、コンポーネントの中で呼び出すこと。（カスタムフックでも使えるが、後日）。またif文やfor文のなかで呼び出さない。トップれれるで定義する。値の更新と再レンダリングは予約（非同期）されている状態。
・前回の値を使いたい場合は、更新用関数を使う。引数に前回の値をセットする（今回はprevはという変数名で利用していた）
・オブジェクト型のstateを更新する際は新しいオブジェクトを生成する。
・コンポーネントごとに独立して管理される。一度消滅したコンポーネントのstateの値はリセットされる。それがいやなら、親コンポーネントで定義し、stateをpropsとして子コンポーネントへ渡すことで利用するようにする。
---
以下06_control_and_form で勉強中（2023-02-28）
06_control_and_form にて npm install, npm start

配列を展開する件。
JSXに文はかけない。式はかける（以前勉強したとおり）。なのでJSX内にfor文は使えない。mapはメソッドで式に当たるので、mapをJSX内に使うことはReactではそこそこある。
注意。keyがない、というワーニングが出る。これには後述する。

React要素ツリーに差分検出をしてDOMを更新している。もとのツリーと。変更予定のツリーとの差分を検出して、その差分のみをDOMに反映する。
子要素が追加された場合。順に差分があるか確認。追加された子要素を検知する→差分をコミットする（DOM更新）
各子要素にキーがあれば、同じキーの要素で差分を確認する。キーごとに差分を見つけられれば、実際に更新が必要な箇所がわかる → 最小限の更新となる。
keyは一意である必要がある。親にぶら下がる子要素内で一意であればいい。またはkeyの更新はしないもの。
配列のインデックスはなるべく使わない　→ 配列のインデックスにkeyを紐づけると、要素の追加や削除をすると想定外の要素にkeyが紐づき不具合の原因になる。

条件分岐 if文、&&、??（Null合体演算子）、３項演算子 は便利

最初からコンポーネントを分けて書くのは難しい。大きなReactコンポーネント作ってから役割ごとに分割していくのがいい。