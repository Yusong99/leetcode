/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let start = nums[0]
    let end = nums[0]
    let res = []
    if(nums.length === 1) {
        res.push(nums[0].toString())
    }
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] === nums[i] + 1) {
            end = nums[i + 1]
        } else {
            if (start !== end) {
                res.push(start + '->' + end)
            } else {
                res.push(start.toString())
            }
            start = nums[i + 1]
            end = nums[i + 1]
        }
        if (i === nums.length - 2) {
            if (start !== end) {
                res.push(start + '->' + end)
            } else {
                res.push(start.toString())
            }
            start = nums[i + 1]
            end = nums[i + 1]
        }
    }
    return res
};