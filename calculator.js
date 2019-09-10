//計算状況の各変数を用意　result=最終合計値　total=計算中の合計値 
//key=入力値　mark=演算子 flag=直前の入力値の種類の判別用の変数　0:数値 1:演算子 2:=
let result = 0;
let editResult=0;
let key = "";
let mark = "";
let flag = 0;

//数値を入力した場合のrecordNumber()関数。ifでflagに応じて条件分岐させる
function recordNumber(e) {
    if (flag === 0) {
        key += e;
        document.getElementById("result").value = key
    } else if (flag === 1) {
        flag = 0;
        key = e;
        document.getElementById("result").value = key
    } else {
        flag = 0;
        result = 0;
        editResult=0;
        key = "";
        mark = "";
        key += e;
        document.getElementById("result").value = key;
    }

    console.log("result" + result);
    console.log("key" + key);
    console.log("mark" + mark);
    console.log("flag" + flag);
}

//記号を入力した場合の関数calc()。＝とそれ以外で条件分岐
function calc(e) {
    if (e === "=") {
        if (mark === "+") {
            flag = 2;
            editResult = Number(result) + Number(key);
            document.getElementById("result").value = editResult;
        } else if (mark === "-") {
            flag = 2;
            editResult = Number(result) - Number(key);
            document.getElementById("result").value = editResult;
        } else if (mark === "*") {
            flag = 2;
            editResult = Number(result) * Number(key);
            document.getElementById("result").value = editResult;
        } else if (mark === "/") {
            flag = 2;
            editResult = Number(result) / Number(key);
            document.getElementById("result").value = editResult;
        }
    } else if (e === "+") {
        flag = 1;
        mark = e;
        let sumResult = Number(result) + Number(key);
        key = "";
        result = sumResult;
        document.getElementById("result").value = result;
    } else if (e === "-") {
        if (result === 0) {
            flag = 1;
            mark = e;
            result = Number(key)
            key = "";
            document.getElementById("result").value = result;
        } else {
            flag = 1;
            mark = e;
            let sumResult = Number(result) - Number(key);
            key = "";
            result = sumResult;
            document.getElementById("result").value = result;
        }
    } else if (e === "*") {
        if (result === 0) {
            flag = 1;
            mark = e;
            result = Number(key)
            key = "";
            document.getElementById("result").value = result;
        } else {
            flag = 1;
            mark = e;
            let sumResult = Number(result) * Number(key);
            key = "";
            result = sumResult;
            document.getElementById("result").value = sumResult;
        }
    } else if (e === "/") {
        if (result === 0) {
            flag = 1;
            mark = e;
            result = Number(key)
            key = "";
            document.getElementById("result").value = result;
        } else {
            flag = 1;
            mark = e;
            let sumResult = Number(result) / Number(key);
            key = "";
            result = sumResult;
            document.getElementById("result").value = sumResult;
        }
    }



}


//クリアキーを押したときのclearAll()関数
function clearAll() {
    result = 0;
    key = "";
    mark = "";
    flag = 0;
    document.getElementById("result").value = result;

}


