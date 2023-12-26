/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let arr1 = num1.split('')
    let arr2 = num2.split('')
    let result = []
    let tag = 0
    let len = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < len; i++) {
        let sum = (+arr1.pop() || 0) + (+arr2.pop() || 0) + tag //或0是为了arr为空的情况
        if (sum >= 10) {
            sum = sum % 10
            tag = 1
        } else {
            tag = 0
        }
        result.unshift(sum)
    }
    if (tag === 1) {
        result.unshift(tag)
    }
    return result.join('')
};