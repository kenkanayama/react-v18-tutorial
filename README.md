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