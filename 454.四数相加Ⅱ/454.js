/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    // 分组+map， 分组两个一组，尽量降低时间复杂度为n方
    let myMap = new Map()
    let count = 0
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (!myMap.has(nums1[i] + nums2[j])) {
                myMap.set(nums1[i] + nums2[j], 1) //注意这里是1，因为已经有一个了
            } else {
                let newNum = myMap.get(nums1[i] + nums2[j]) + 1
                myMap.set(nums1[i] + nums2[j], newNum)
            }
        }
    }

    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            let num = 0 - (nums3[i] + nums4[j])
            if (myMap.has(num)) {
                count += myMap.get(num)
            }
        }
    }

    return count
};