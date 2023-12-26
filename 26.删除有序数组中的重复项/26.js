/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let slow = 0;
    let len = nums.length
    for (let i = 1; i <= len; i++) {
        if (nums[slow] !== nums[i]) {
            nums[slow + 1] = nums[i]
            slow++
        }
    }
    return slow
};

removeDuplicates([1,1,2])