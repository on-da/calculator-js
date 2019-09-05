
function edit(e) {
    let result = document.getElementById("result");
    result.value = result.value + e.value;
}
function calc() {
    result.value = new Function("return " + result.value)();
}