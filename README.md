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

再度まとめると

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

JSXのlabel要素の使い方は二つある。htmlFor（HTMLだとFor）でIDを指定してinput要素のIDと一致させる場合と、input要素をlabel要素で囲ってあげるパターン。
2023-03-02 06_control_and_form
input、textarea、ラジオボタン、チェックボタンのJSX関係を書いてみた

todoアプリ作成(2023-03-04)
作ってみたメモ：
・propsの受け取り時に波括弧忘れをよくする
・子コンポーネントによる値の更新で、デフォルト値を親コンポーネントに定義している場合は当然だが子コンポーネントから親コンポーネントへ値を渡す必要があり、その際には親コンポーネント側でデフォルト値を更新する関数を用意し、その関数を子コンポーネントにpropsとして渡して子コンポーネント側で変更する値を引数として渡してあげると、親側の関数はちゃんと動く。（復習）
・input type="text" に対してonChangeを実行する際に、キーボードのエンターキーで実行させる場合には　form タグで括る必要がある。その際　onSubmitにエンターキーを押下した際に動作＝関数を入れる。このとき、HTMLのデフォルトの挙動でリロードが走ってしまう。こういうデフォルトの機能を止めるために　実行する関数内に　e.preventDefault();　との記述が必要

CSSのインライスタイルの注意点
→本番環境で使うことはないと思っていい。再利用性は低いし疑似要素や疑似セレクター、メディアクエリが使えない。パフォーマンスも悪い。

外部CSS読み込み。コンポーネントごとにCSSファイルを作成する場合はコンポーネントと同じ名前で作るのが基本だと思っていい。
注意点！コンポーネントごとにCSSを適用するという子はできない。全体にスタイルは適用される。後から読んだようが適用される。
なので　CSS Modulesが生まれた、が、廃止予定なのでCSS-in-JSを使う。

CSS-in-JSは基本的にライブラリを使う。今回はstyled componentsを使う。（すでにライブラリインポート済み。）
npm i styled-components で実行すれば使用可能な状態になる。
また拡張機能の styled-components.vscode-styled-components 使うと整形しやすくなる
styled-componentsは疑似要素や疑似セレクター、メディアクエリが使える。

タグ付きテンプレートという関数の書き方になる。styled.button``;
`` ←これをテンプレート文字列と呼ぶ。

styled-componentsは継承ができる。
styled(継承したいstyled-components　スタイル)で継承ができる。
styled-componentsの
メリット
・スタイルをコンポーネントで定義するので、外部のcssに依存することなくコンポーネント単体で動作する
・JavaScriptで記述するため、JSの文法が使用出来たり、propsとして値を渡すこともできる
・ユニークなクラス名が自動生成され他のコンポーネントに影響を与えないことが保証される
・cssの設計が必要なくなる
・コンポーネントで完結しているため、他のプロジェクトで再利用がしやすい
デメリット
・自動生成されるユニークなクラス名が読めない
・cssに比べパフォーマンスに劣る
※ 些細な差なのでデメリットというほどでも無い
※ どうしても気になる方は、Nextjsを使用することでパフォーマンスの面は気にしなくてよくなる。

Reactでのスタイルの適用方法
・外部CSS読み込み
・インライスタイル（あまり使わない。実験的に使うとか、頻繁に変わるとか。疑似要素やメディアクエリは使えない）
・CSS module（将来非推奨になる可能性がある、create-react-appで設定済みの多面すぐに使える。）
・CSS in JS（CSSをJS内に記載する。ライブラリを導入する必要Gあある。疑似要素やメディアクエリが使える。propsで動的にスタイルできる。継承ができる。クラス名の衝突が起きない。この講座おすすめのもの。）

CSSのフレームワーク
CSSのフレームワークはクラスを振っていくタイプとコンポーネントでまとまっているタイプの２種類がある。
・Chakra UI（CSS in JSがベース。コンポーネントでまとまっている。インラインの形で書く。基本的にはどうコンポーネントを使うかという覚えゲー。）
・Material UI（コンポーネントで定義している。ChakraUIと似ている。基本的にはどうコンポーネントを使うかという覚えゲー。）
・Bootstrap（昔からあるね。クラスを振って、それによってスタイルが適用される。React使わない記述と同じ。）
・BULMA（Bootstrapとおなじ感じ）
・Tailwind（細分化されているフレームワーク。BULUMAより細分化されている。）

DOMの操作。
useRefでDOM操作ができる。
createPortal ポータルの子要素を、直接の（本来の）親要素以外の別のDom要素にマウントさせることができる

2023-03-07
createPortal
子要素は親要素のスタイルによって表示に制限を受ける場合がある。（overflow: hidden 、 z-index 、 width　など・・・ ）
それらの制限なく、子要素が親要素を「飛び出して」表示する必要があるときにcreatePortalを使うのが有効。
モーダル、ポップアップ、トーストは使用の代表例。

react要素のツリーの構成でバブリングは発生する。（通常のHTMLとは異なる）
→子から親に伝播すること。今回はクリックイベントで確認した。onClickを子要素で実行する。親要素にもonClickをあえて記述してみて、子要素側でクリックを行うと親要素のクリックイベントも実行された。
これをバブリングという。
createPortalはDOMツリー構成を変更させてはいるが、react要素事態は変更されていないためにバブリングが発生する。

React hook
useRef
ref要素に設定すると、useRefはcurrentプロパティで設定された要素ににアクセスすることができる
・再レンダリングを発生させず値を保持する方法

際レンダリングされても情報が保持されれる。通常の変数はレンダリング度に初期化される。
refの値を変更しても際レンダリングがトリガーされない。
stateは際レンダリングされる。
DOM要素を格納してアクセスして操作するのが一般的な利用法

refをコンポーネント間でも共有する方法は２種類ある。
一つ目は、ref要素を別の名前にして受け渡す。（refは特別な要素なので）
もう一つはforwardRef　というReactHooksを使用する。こちらのほうが明確にref要素を渡すことがわるのでチーム開発だったりAPI開発ではこちらのほうがいい。
しかしrefを受け渡してDOMのやりとりを行うのはコンポーネント同士の依存関係も強くなるので、なるべく避けるといい。

forwardRef や　useImperativeHandle　はあまり使わないほうがいい。stateで対応できるものはstateでいい。
子要素のDOMを使うものだが、それが増えるとどこで何をしているのかがよくわからなくなる。
親から子にデータを渡すはあるが、子から親に渡すのはなるべく避けるべき。
１方向のデータの流れを追えばいいがこのrefのHooksを使うと、子から親にデータの流れが移るのでコードを追うのが煩雑になる。
他の解決策があるならそれを使うのがいい。使わないといけないなら　useImperativeHandle　で使い方を限定させるのがいい。

まとめ
・ポータルの子要素を別のDOM}yousoni マウントすることができる。バブリングが発生することに注意。
・useRef再レンダリングを発生させず値を保持する方法。DOMに使うのが基本だが、DOM以外にも使える。
・refを使ったDOMの操作。JSXのref属性に渡すと、currentに参照できるものが格納できる。
・forwardRef。Reactのデフォルトでは、コンポーネントが他のコンポーネントのDOMにアクセスすることはできない。許していない。が、forwardRefでラップさせると、親のrefを子コンポーネントに渡すことができて、子コンポーネントが親コンポーネントのDOMにアクセス許可を与えることになる。
・useRef、直接DOMを操作するべきではない。最終手段と思ったほうがいい。頻繁に使用するものではない。
・useImperativeHandle。forwardRefと併用するもの。

---

手続型プログラミング→順序どおり記述する
関数型プログラミング→手続型の制御をなるべく関数に分離してやりたいことに集中するプログラミング手法
ただ関数型と手続型は混在する。

関数型のプログラミングの減りとは
・コードの可読性の向上
・拡張性、再利用性の向上
・テスト性の向上
・モジュール化の向上（Reactではコンポーネントにあたる）
・Tree Shakingの向上（無駄なコードを削除しやすくなるメリット）

キーワード
状態管理と処理を分離
純粋関数（特定の入力には特定の出力を返す）
不変性（一度設定した値は書き換えない）

---

関数型プログラミングの中身が手続型がっても、呼び出す側からみたら関数型なので見る視点で呼び方、見え方は変わる。
関数型にすればやりたいことに集中できる。
とにかく状態と処理を分離して管理するのが関数型。

---

純粋関数
→ちょっと抽象的。Reactの思想も純粋関数。数式のようなもので、決められたインプットに対して決められた値を返すもの。また関数外に影響を及ぼさないもので、引数で渡された値を変更しないもの。

---

・Reactと純粋関数
以下のChildコンポーネントは純粋関数ではない。こんな記述はよくない。どこでエラーが起きたかも追いづらくなる。

```
const Child = () => {
  value++;
  return <div>{value}</div>
}
  return (
    <>
      <Child/>
      <Child/>
      <Child/>
    </>
  );
```

テストをする場合にも、特定の値を与えたら特定の値を返す、という純粋関数でないとテストができない。

---

Reactのstate管理を行なっている関数コンポーネント自体は純粋関数にはならない。（状態によって中の関数の返却値が変わる点。しかしそれ以外の純粋関数の条件は守るようにしよう。）
関数コンポーネントはあくまでJSXを作成する場所。

---

useReducer
useContextに突入

useState:状態の更新の仕方は利用側に託す。状態だけを管理。
useReducer:状態の更新の仕方も状態側で担当する。アプリが大きくなってきたらuseReducerで更新の管理もすると、複数人数で開発する際に思いもよらぬ更新処理を書かれることがなくなる。

状態と処理の分離
useState: コンポーネントで更新用の処理を保持
useReducer: stateと一緒に更新用の処理を保持

純粋性（純粋関数）
特定の引数に特定の戻り値

useReducerを使うと第一引数の処理を関数コンポーネント外に関数としてかける。テストもしやすくなるし管理もしやすくなる。
簡単な処理はuseStateでいいが、複雑だったりテストを導入するならuseReducerを検討するといい。
