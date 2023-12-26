/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0
    if (n === 1) return 1
    let F = [0, 1]
    for (let i = 2; i <= n; i++) {
        F.push(F[i - 1] + F[i - 2])
    }
    return F[n]
};