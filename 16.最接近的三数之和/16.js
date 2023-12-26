/**
 * @param {number[]} nums
 * @param {number} target
 * @return {*[]}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length === 3) return nums.reduce((prev, next) => prev + next, 0)
    nums.sort((a, b) => a - b)
    let addSum = []
    for (let i = 0; i < nums.length; i++) {
        let L = i + 1
        let R = nums.length - 1
        let sum
        while (L < R) {
            sum = nums[i] + nums[L] + nums[R]
            if (sum < target) {
                L++
                if (L < R) {
                    let next = nums[i] + nums[L] + nums[R]
                    if (next > target)
                    addSum.push((sum - target) > (next - target) ? next : sum)
                }else {
                    addSum.push(sum)
                }
            } else if (sum > target) {
                R--
                if (L < R) {
                    let next = nums[i] + nums[L] + nums[R]
                    if (next < target) {
                        addSum.push((sum - target) > (next - target) ? next : sum)
                    }
                }else {
                    addSum.push(sum)
                }
            } else {
                return sum
            }
        }
    }
    let min = Math.abs(addSum[0]-target)
    let index = 0
    for (let i = 0; i < addSum.length; i++) {
        if ( min > Math.abs(addSum[i] - target) ) {
            min = Math.abs(addSum[i] - target)
            index = i
        }
    }
    return addSum[index]
};
console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2));
