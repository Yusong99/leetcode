/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // 左闭右闭二分写法 [left, right]
    // let left = 0
    // let right = nums.length - 1
    // while (left <= right) {
    //     let middle = Math.ceil((left + right) / 2)
    //     if (nums[middle] > target) {
    //         right = middle - 1
    //     } else if (nums[middle] < target) {
    //         left = middle + 1
    //     } else {
    //         return middle
    //     }
    // }
    // return -1

    // 左闭右开二分写法 [left,right)
    let left = 0
    let right = nums.length
    while (left < right) {
        let middle = Math.ceil((left + right) / 2)
        if (nums[middle] > target) {
            right = middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
};