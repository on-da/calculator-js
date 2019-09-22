//合計値を示すtotal、前の計算の合計pastTotal
//直前の入力情報pastInputType(数字・小数点:number、演算子:calcAction)
//ひとつ前の演算子を示すmark、入力値を示すkeyの5つの変数を用意
let total = 0;
let pastTotal = 0;
let pastInpuType = "calcAction";
let mark = "+";
let key = "";

//数字・小数点のボタンがクリックされた時に動くrecordNumber関数

const recordNumber = (inputKey) => {
    if (pastInpuType === "calcAction") {//直前に演算子が入力されていた場合      
        if (mark === "=") {//＝の後に数値を入力した場合、計算をリセットする
            total = 0;
            pastTotal = 0;
            mark = "";
            key = inputKey;
        } else {
            key = inputKey;    
    }} else {//数値が入力されていた場合
        key += inputKey;
    }
    //直前の入力情報を演算子から数値に切り替え最後に電卓の表示を更新
    pastInpuType = "number";
    document.getElementById("result").value = key;
};



const editAction = (inputKey) => {
    //=が入力された場合。直前に入力された演算子に応じた四則計算を行う

    //=の前の演算子で生まれたtotalの値をpastTotalへ
    pastTotal = total;

    //＝の前の演算子4パターンの条件分岐
    if (mark === "+") {
        total = pastTotal + Number(key);
    } else if (mark === "-") {
        total = pastTotal - Number(key);
    } else if (mark === "*") {
        total = pastTotal * Number(key);
    } else if (mark === "/") {
        total = pastTotal / Number(key);
    }

    //直前の入力情報を演算子に切り替え、入力情報をクリア（=のあとに演算子を押してもいいように）計算結果を表示
    pastInpuType = "calcAction"
    mark === inputKey
    key = "";
    document.getElementById("result").value = total;

};


//演算子が入力された時に動くcalclateAction関数
const calculateAction = (inputKey) => {

    //現在の計算結果を前の計算結果に変更する
    pastTotal = total;

    //+の計算部分    
    if (mark === "+") {
        total = pastTotal + Number(key);

        //-の計算部分
    } else if (mark === "-") {
        total = pastTotal - Number(key);

        //*の計算部分
    } else if (mark === "*") {
        if (key === "") {//=の入力直後に演算子を打った場合の処理
            total = pastTotal;
        } else {
            total = pastTotal * Number(key);
        }
        // /の計算部分
    } else if (mark === "/") {
        if (key === "") {//同上
            total = pastTotal;
        } else {
            total = pastTotal / Number(key);
        }
    }

    //演算子の入力情報を更新、直前の入力情報を演算子に切り替え、電卓の表示の更新
    mark = inputKey;
    pastInpuType = "calcAction";
    document.getElementById("result").value = total
}

//入力情報を初期に戻すクリアボタンを押したら動く関数
const clearAll = () => {
    total = 0;
    pastTotal = 0;
    pastInpuType = "calcAction";
    mark = "+";
    key = "";
    document.getElementById("result").value = total;
}


/* 各変数をコンソールで確認するためのコード　コピペ用
console.log("total:" + total);
console.log("pastTotal:" + pastTotal);
console.log("pastInputType:" + pastInpuType);
console.log("mark:" + mark);
console.log("key:" + key);
console.log("-------------------------");
*/