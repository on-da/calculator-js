//合計値を示すtotal、前の計算の合計pastTotal
//直前の入力情報pastInputType(数字・小数点:number、演算子:calcAction)
//ひとつ前の演算子を示すmark、入力値を示すkeyの5つの変数を用意
let total = 0;
let pastTotal = 0;
let pastInpuType = "calcAction";
let mark = "";
let key = "";

//数字・小数点のボタンがクリックされた時に動くrecordNumber関数

//直前に演算子が入力されていた場合
const recordNumber = (inputKey) => {
    if (pastInpuType === "calcAction") {
         //＝の後に数値を入力した場合、計算をリセットする
        if (mark === "=") {
            total = 0;
　　　　　　 pastTotal = 0;
            mark = "";
            key = inputKey;
        } else {
            key = inputKey;
        }
        //数値が入力されていた場合
    } else {
        key += inputKey;
    }
    //直前の入力情報を演算子から数値に切り替え最後に電卓の表示を更新
    pastInpuType = "number";
    document.getElementById("result").value = key;
};



const editAction = (inputKey) => {
    //=が入力された場合。直前に入力された演算子に応じた四則計算を行う
    if (inputKey === "=") {

        //=の前の演算子で生まれたtotalの値をpastTotalへ
        pastTotal = total;

        //＝の前の演算子4パターンの条件分岐
        if (mark === "+") {
            mark === inputKey;
            total = pastTotal + Number(key);
        } else if (mark === "-") {
            mark === inputKey;
            pastTotal = total - Number(key);
        } else if (mark === "*") {
            mark === inputKey;
            pastTotal = total * Number(key);
        } else if (mark === "/") {
            mark === inputKey;
            pastTotal = total / Number(key);
        }
    }
    //直前の入力情報を演算子に切り替え、計算結果を表示
    pastInpuType = "calcAction"
    document.getElementById("result").value = total;
};


//演算子が入力された時に動くcalclateAction関数
const calculateAction = (inputKey) => {

    //現在の計算結果を前の計算結果に変更する
    pastTotal = total;

    //+の計算部分    
    if (mark === "+") {
        total = pastTotal + Number(key);
        document.getElementById("result").value = total;

        //-の計算部分
    } else if (mark === "-") {
        total = pastTotal - Number(key);

        //*の計算部分
    } else if (mark === "*") {
        {
            if (pastTotal === 0) {
                total = Number(key);
            } else {
                total = pastTotal * Number(key);
            }
        }
        
        // /の計算部分
    } else if (mark === "/") {
        {
            if (pastTotal === 0) {
                total = Number(key);
            } else {
                total = pastTotal / Number(key);
            }
        }
    } else {
        total = Number(key);
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
    mark = "";
    key = "";
    document.getElementById("result").value = total;
}


