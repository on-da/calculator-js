//合計値を示すtotal、＝で計算終了した時の合計calcResult
//直前の入力情報pastkey(数字・小数点:number、演算子:calcAction)
//ひとつ前の演算子を示すmark、入力値を示すkeyの5つの変数を用意
let total = 0;
let calcResult = 0;
let pastInput = "calcAction";
let mark = "";
let key = "";

//数字・小数点のボタンがクリックされた時に動くrecordNumber関数

//直前に演算子が入力されていた場合
const recordNumber = (inputKey) => {
    if (pastInput === "calcAction") {
        key = inputKey;
        pastInput = "number";
        document.getElementById("result").value = key
//数値が入力されていた場合
    } else {
        key += inputKey;
        document.getElementById("result").value = key
    }
};

//演算子が入力された時に動くcalclateAction関数
const calculateAction = (inputKey) => {

    //=が入力された場合。直前に入力された演算子に応じた四則計算を行う
    if (inputKey === "=") {
        if (mark === "+") {
            mark === inputKey;
            calcResult = total + Number(key);
            document.getElementById("result").value = calcResult;
        } else if (mark === "-") {
            mark === inputKey;
            calcResult = total - Number(key);
            document.getElementById("result").value = calcResult;
        } else if (mark === "*") {
            mark === inputKey;
            calcResult = total * Number(key);
            document.getElementById("result").value = calcResult;
        } else if (mark === "/") {
            mark === inputKey;
            calcResult = total / Number(key);
            document.getElementById("result").value = calcResult;
        }
    //+の計算部分    
    } else if (inputKey === "+") {
        mark = inputKey;
        total = calcResult + Number(key);
        document.getElementById("result").value = total;
    }

    //直前の入力情報を演算子に切り替え
    pastInput = "calcAction";

    console.log("total" + total);
    console.log("calcResult" + calcResult);
    console.log("pastInput" + pastInput);
    console.log("mark" + mark);
    console.log("key" + key);

}

