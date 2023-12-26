/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [] // 收集结果
    let result = [] // 结果集
    let len = nums.length
    const backtracking = (nums, used) => {
        if (res.length === len) {
            result.push([...res])
        }
        // console.log(res);
        for (let i = 0; i < len; i++) {
            if (nums[i] === nums[i - 1] && res.length === 0) continue //去重
            if (used[i]) continue // 回溯的时候排除自己
            res.push(nums[i])
            used[i] = true
            backtracking(nums, used)
            res.pop()
            used[i] = false
        }
    }
    backtracking(nums, [])

    //去重
    let mySet = new Set()
    let final = []
    for (let j = 0; j < result.length; j++) {
        if (mySet.has(JSON.stringify(result[j]))) continue
        mySet.add(JSON.stringify(result[j]))
        final.push(result[j])
    }
    return final
};

console.log(permuteUnique([1, 1, 2]));