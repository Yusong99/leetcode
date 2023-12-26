/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const arr1 = nums1.splice(0, m)
    nums1 = nums1.splice(0, m + n, ...([...arr1, ...nums2].sort((a, b) => a - b)))
};