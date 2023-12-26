/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let res = 0
    // 解法一：按列求解
    /* 首先遍历每一列，对比当前列左边最高点和右边
    最高点，差值就是当前列盛的水 */
    // for (let i = 1; i < height.length; i++) {
    //     let leftMax = 0
    //     let rightMax = 0
    //     for (let j = 0; j < height.length; j++) {
    //         if (j < i) {
    //             leftMax = height[j] > leftMax ? height[j] : leftMax
    //         } else if (j > i) {
    //             rightMax = height[j] > rightMax ? height[j] : rightMax
    //         }
    //     }
    //     if (rightMax > height[i] && leftMax > height[i]) {
    //         res += Math.min(rightMax, leftMax) - height[i]
    //     }
    // }

    // 解法二：动态规划
    /* 在上一个解法中，多次遍历了数组来找当前列的前后最大值，可以简化找前后最大值的
    过程，让时间复杂度降级 */
    // 找前面的最大值
    // let leftMax = [0]
    // for (let i = 1; i < height.length; i++) {
    //     leftMax[i] = Math.max(leftMax[i - 1], height[i - 1])
    // }
    // // 找后面的最大值
    // let rightMax = new Array(height.length).fill(0)
    // for (let j = height.length - 2; j > 0; j--) {
    //     rightMax[j] = Math.max(rightMax[j + 1], height[j + 1])
    // }
    // for (let k = 1; k < height.length; k++) {
    //     if (rightMax[k] > height[k] && leftMax[k] > height[k]) {
    //         res += Math.min(rightMax[k], leftMax[k]) - height[k]
    //     }
    // }

    // 解法三：双指针法
    /* 通过双指针优化存储 */
    let leftMax = 0
    let rightMax = 0
    let left = 1
    let right = height.length - 2 // 加右指针进去
    for (let i = 1; i < height.length - 1; i++) {
        //从左到右更
        if (height[left - 1] < height[right + 1]) {
            leftMax = Math.max(leftMax, height[left - 1]);
            let min = leftMax;
            if (min > height[left]) {
                res = res + (min - height[left]);
            }
            left++;
            //从右到左更
        } else {
            rightMax = Math.max(rightMax, height[right + 1]);
            let min = rightMax;
            if (min > height[right]) {
                res = res + (min - height[right]);
            }
            right--;
        }
    }
    return res
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));