/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let prev = 1
    let next = 2
    let temp
    if (n === 1) return 1
    if (n === 2) return 2
    for (let i = 2; i < n; i++) {
        temp = next
        next = temp + prev
        prev = temp
    }
    return next
};