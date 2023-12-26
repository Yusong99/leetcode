/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === val) {
    //         nums.splice(i, 1)
    //         i--
    //     }
    // }
    // return nums.length
    const n = nums.length
    let slow = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] !== val) {
            nums[slow] = nums[i]
            slow++
        }
    }
    return slow
};
