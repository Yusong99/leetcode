/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    // 回溯法
    let res = [] // 每次回溯要收集的结果
    let result = [] // 结果集
    let len = nums.length // 表示nums的长度，也是要去结果的条件
    const backtracking = (nums, used) => {
        if (res.length === len) {
            result.push([...res])
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            res.push(nums[i])
            used[i] = true
            backtracking(nums, used)
            used[i] = false
            res.pop()
        }
    }
    backtracking(nums, [])
    return result
};

console.log(permute([1, 2, 3]));