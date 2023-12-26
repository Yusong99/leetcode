/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    // 这里不可以直接原地删改字符串，js没有内置的方法，要么直接split转数组用splice要么直接用slice生成新的
    // 数组法太low直接双指针反转法，就是反转字符串Ⅰ的题目
    const len = s.length
    let newArr = s.split('')
    for (let i = 0; i < len; i += 2 * k) {
        let left = i
        let right = i + k - 1 > len ? len : i + k - 1 //这里注意后面的也要-1！！！⭐
        while (left < right) {
            let temp = newArr[left]
            newArr[left] = newArr[right]
            newArr[right] = temp
            left++
            right--
        }
    }
    return newArr.join('')
};

console.log(reverseStr("abcdefg", 2));