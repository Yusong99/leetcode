/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    // 单调栈法
    let stack = [0] // 单调递增栈
    let res = Array(temperatures.length).fill(0) // 设置每个元素都为0
    for (let i = 0; i < temperatures.length; i++) {
        let n = stack[stack.length - 1]
        if (temperatures[i] <= temperatures[n]) {
            stack.push(i)
        } else {
            while (stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]) {
                let top = stack.pop()
                res[top] = i - top
            }
            stack.push(i)
        }
    }
    return res
};