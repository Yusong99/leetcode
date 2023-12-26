/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = []
    let path = []
    let len = s.length
    const backtracking = (startIndex) => {
        if (startIndex >= len) {
            result.push([...path])
            return
        }
        for (let i = startIndex; i < len; i++) {
            if (!isPalindrome(s, startIndex, i)) continue
            path.push(s.slice(startIndex, i + 1))
            backtracking(i + 1)
            path.pop()
        }
    }
    backtracking(0)
    return result
};
const isPalindrome = (s, l, r) => {
    for (let i = l, j = r; i < j; i++, j--) {
        if (s[i] !== s[j]) return false
    }
    return true
}
console.log(partition("aab"))
