/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    };
    let slow = 2;
    let fast = 2;
    while (fast < n) {
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast]
            ++slow
        }
        ++fast;
    }
    return slow;
};

let arr = [0, 0, 1, 1, 1, 1, 2, 3, 3]
console.log(removeDuplicates(arr));