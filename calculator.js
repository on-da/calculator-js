//計算状況の各変数を用意　result=最終合計値　total=計算中の合計値 
//key=入力値　mark=演算子 flag=直前の入力値の種類の判別用の変数　0:数値 1:演算子 2:=
let result = 0;
let key = 0;
let mark = "";
let flag = 0;

//数値を入力した場合のrecordNumber()関数。ifでflagに応じて条件分岐させる
function recordNumber(e) {
    if (flag === 0) {
        key += e;
        document.getElementById("result").value = key
    } else if (flag === 1) {
        flag = 0;
        key =e;
        let total = result + mark + key;
        result = total; 
        key = "";
        document.getElementById("result").value = result;
    } else {
        flag = 0;
        result = 0;
        key = 0;
        mark = "";
        key += e;
        document.getElementById("result").value = key;
    }
}

//記号を入力した場合の関数calc()。＝とそれ以外で条件分岐
function calc(e) {
    if (e === "=") {
        mark = e;

        document.getElementById("result").value = result;
    } else {
        mark = e;
        result = key;
        key=0;

    }
}

//クリアキーを押したときのclearAll()関数
function clearAll() {
    result = 0;
    key = 0;
    mark = "";
    flag = 0;
    document.getElementById("result").value = result;

}


