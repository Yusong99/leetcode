/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [] //存放结果集
    let path = [] // 存放符合条件的结果
    let sum = 0 // 已经收集的元素的总和，也就是path里元素的总和
    let index = 1
    const dfs = (path, sum, index) => {
        if (path.length > k) return
        if (sum === n && path.length === k) {
            res.push([...path])
            return
        }
        for (let i = index; i <= Math.min(9, n); i++) {
            sum += i
            index++
            if (sum > n) return
            path.push(i)
            dfs(path, sum, index)
            path.pop()
            sum -= i
        }
    }
    dfs(path, sum, index)
    return res
};