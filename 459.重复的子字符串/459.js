/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    // 暴力解法：
    // for (let i = 0; i < s.length-1; i++) {
    //     let num = s.length % (i + 1)
    //     if (num !== 0) continue
    //     let num1 = s.length / (i + 1)
    //     let str = ''
    //     for (let j = 0; j < num1; j++) {
    //         console.log(str);
    //         str += s.substring(0, i+1)
    //     }
    //     if (str === s) return true
    // }
    // return false
    // 移动匹配法
    // 一个字符串中由重复的字串组成那么意味着在2s中必有前一个s的后字串和后一个s的前字串能构成一个完整的s！！！
    if (s.length <= 1) return false
    let two = (s + s).substring(1, s.length*2-1)
    return two.indexOf(s) === -1 ? false : true

};

console.log(repeatedSubstringPattern("ab"));