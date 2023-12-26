/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // 由题目可知负数不是回文数
    if (x < 0) return false
    let arr = x.toString().split('')
    let arr2 = x.toString().split('').reverse()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr2[i]) return false
    }
    return true
};