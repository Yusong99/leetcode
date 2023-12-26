/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = []
    candidates.sort((a, b) => a - b)
    let path = []
    let sum = 0
    let index = 0
    const dfs = (path, sum, index) => {
        if (sum === target) {
            res.push([...path])
            return
        }
        if (sum > target) return
        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i])
            sum += candidates[i]
            dfs(path, sum, i)
            path.pop()
            sum -= candidates[i]
        }
    }
    dfs(path, sum, index)
    return res
};

console.log(combinationSum([2, 3, 6, 7], 7));