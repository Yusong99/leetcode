/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim() // 去除两端空格
    let arr = s.split('')
    for (let i = 0; i < arr.length;) {
        if (arr[i] === ' ' && arr[i + 1] === ' ') {
            arr.splice(i + 1, 1)
        } else {
            i++
        }
    }
    arr = arr.join('').split(' ')
    arr.reverse()
    return arr.join(' ')
};