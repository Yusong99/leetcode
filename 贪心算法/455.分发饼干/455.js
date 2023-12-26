/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0, j = 0; i < g.length && j < s.length;) {
        if (s[j] >= g[i]) {
            sum++
            i++
            j++
        }
        else if (s[j] < g[i]) {
            j++
        }
    }
    return sum
};