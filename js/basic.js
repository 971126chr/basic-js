function codeBlockPrint() {
    document.getElementById("demo-3").innerHTML = "Hello!";
    document.getElementById("demo-4").innerHTML = "How are you?";
}

function testNum(a) {
    let result;
    if (a > 0) {
        result = "positive";
    } else if (a === 0) {
        result = "NO";
    } else {
        result = "NOT positive";
    }
    return result;
}

console.log(testNum(5));
console.log(testNum(0));
console.log(testNum(-5));