/**
 * @param {number[]} nums
 * @return {number}
 */
// the soldiers occupied the hill
var majorityElement = function (nums) {
    let winner = nums[0]
    let count = 1
    for (let index = 1; index < nums.length; index++) {
        if (winner == nums[index]) {
            count++
        } else if (count == 0) {
            winner = nums[index]
            count++
        } else {
            count--
        }
    }
    return winner
};