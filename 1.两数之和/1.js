/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const myMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        // 注意这里get的是target-当前遍历的值，也就是之前存进去的值
        if (myMap.has(target - nums[i])) return [i, myMap.get(target - nums[i])]
        myMap.set(nums[i], i)
    }
};