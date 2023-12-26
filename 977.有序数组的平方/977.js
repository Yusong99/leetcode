/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let result = Array(nums.length)
    let right = nums.length - 1 //新数组的下标
    let j = right
    for (let i = 0; i <= j;) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            result[right--] = nums[i] * nums[i]
            i++
        } else {
            result[right--] = nums[j] * nums[j]
            j--
        }
    }
    return result
};

console.log(sortedSquares([-2, 1, 3, 4]));