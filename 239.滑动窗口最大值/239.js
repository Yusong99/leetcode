/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let result = []
    let res = []
    let first = 0
    let maxNum = 0
    tag = 0 //最大数的下标
    for (let i = k - 1; i < nums.length; i++, first++) {
        if (tag === 0) {
            maxNum = nums[first]
            for (let j = first; j <= i; j++) {
                if(nums[j] >= maxNum){
                    maxNum = nums[j]
                    tag = j - first
                }
            }
            res.push(maxNum)
        } else {
            if (nums[i] >= maxNum) {
                maxNum = nums[i]
                tag = i - first
                res.push(nums[i])
            } else {
                res.push(maxNum)
                tag--
            }
        }
    }
    return res
};

console.log(maxSlidingWindow([1,-1], 1));