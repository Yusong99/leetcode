/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let arr = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/') {
            if (tokens[i] === '+') {
                let num2 = Number(arr.pop())
                let num1 = Number(arr.pop())
                arr.push(Math.trunc(num1 + num2))
            } else if (tokens[i] === '-') {
                let num2 = Number(arr.pop())
                let num1 = Number(arr.pop())
                arr.push(Math.trunc(num1 - num2))
            } else if (tokens[i] === '*') {
                let num2 = Number(arr.pop())
                let num1 = Number(arr.pop())
                arr.push(Math.trunc(num1 * num2))
            } else if (tokens[i] === '/') {
                let num2 = Number(arr.pop())
                let num1 = Number(arr.pop())
                arr.push(Math.trunc(num1 / num2))
            }
        } else {
            arr.push(tokens[i])
        }
    }
    return arr.pop()
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));
/* Math.trunc:去除小数位只保留整数位，这题注意因为有负数所以不能向下或向上取整 */