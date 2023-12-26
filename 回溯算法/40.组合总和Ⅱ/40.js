/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let result = []
    let path = []
    candidates.sort((a, b) => a - b)
    const trackBacking = (sum, index) => {
        if (sum === target) {
            result.push([...path])
            return
        }
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue
            // 注意这里要放在回溯之前，不然没有回退🤡
            if (sum + candidates[i] > target) break
            path.push(candidates[i])
            sum += candidates[i]
            // 这里要传的是当前下标加1，不是传过来的下标加1🤡
            trackBacking(sum, i + 1)
            path.pop()
            sum -= candidates[i]
        }
    }
    trackBacking(0, 0)
    // // 不会剪枝就想办法去重
    // let myMap = new Set()
    // let res = []
    // for (let j = 0; j < result.length; j++) {
    //     result[j].sort((a, b) => a - b)
    //     if (myMap.has(JSON.stringify(result[j]))) {
    //         // break  注意不是break
    //         continue
    //     }
    //     myMap.add(JSON.stringify(result[j]))
    //     res.push(result[j])
    // }
    return result
};
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));