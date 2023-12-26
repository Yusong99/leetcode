/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    /* 不需要两个数组，只需要在一个数组上一个++一个--即可 */
    if (s.length !== t.length) return false
    let arr = Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        arr[(s.charCodeAt(i)) % 97]++
    }
    for (let j = 0; j < t.length; j++) {
        arr[(t.charCodeAt(j)) % 97]--
    }
    for (let k = 0; k < 26; k++) {
        if (arr[k] !== 0) return false
    }
    return true
};