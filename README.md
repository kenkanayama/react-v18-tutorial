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
