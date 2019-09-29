
電卓をJSで作ってみた記録
=================================

1.完成までの流れ
2.引用
---------------------------------

###　完成までのながれ

>ProgateやテキストでJSでコードを書く上で必要な知識はある程度確保した気がしたので
プログラマーをしている大学時代の知人の勧めに従い電卓を作ってみることに。
>取りあえずJSの作り方、電卓ってググってみてテックアカデミーのサイトに短くて楽そうな見本があったので
作ってみるも、evalを使うなとダメ出しされる。
>使わない方法で書いてみるも、文字列として変数に入れた入力の値を再度、数値として計算のために扱うか
がわからず悩む。
ヒント：1回前に入力された内容を覚えておく必要があるという感じかなあとか言われるのでそれをしてみる。
>結論：calc計算時にresult(合計値)、key(入力値)をそれぞれNumber()で文字列で数値に変えて
editResult変数に合計値を格納しその変数をresultにするを繰り返す感じに。calc関数の分岐を=とそれ以外
ではなく、=・+・-・*・/それぞれ分岐させる。
>プルリク送ったらメンターっぽい人に色々言われる。要はもっとシンプルにコード書けみたいなニュアンス。
flagで管理してた条件分岐とかを削る感じにする

>同じようなコードを何回も書いていたりごちゃごちゃしているところを修正




### 引用

[TECHAVADEMY-JavaScriptで電卓プログラムを作成する方法を現役エンジニアが解説]
(https://techacademy.jp/magazine/21139):最初に参考にした見本



[イヌでもわかるJavaScript講座-電卓]
(http://cya.sakura.ne.jp/java/calc.htm):参考にした見本

[Labyrinthe Noir-電卓のソースと解説]
(http://www.shurey.com/js/craft/calc/index.html):参考にした見本２



[Javascriptで電卓を作ろう　第2回 ]
(https://qiita.com/rikimaru914/items/3412df78570b48b25858) 

[いまさら聞けない、HTML5カスタムデータ属性の基本と使いどころ]
(https://www.webprofessional.jp/how-why-use-html5-custom-data-attributes/)

[MDN:データ属性の使用]
(https://developer.mozilla.org/ja/docs/Learn/HTML/Howto/Use_data_attributes)
