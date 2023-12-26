/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    /* 这道题用set和数组都行，就用set写，set比较不熟一点 */
    let mySet = new Set()
    let mySet2 = new Set()
    nums1.forEach((item => {
        mySet.add(item)
    }))
    for (let i = 0; i < nums2.length; i++) {
        if (mySet.has(nums2[i])) mySet2.add(nums2[i])
    }
    let result = []
    // for (const item of mySet2) {
    //     result.push(item)
    // }
    result = [...mySet2] //可以直接用展开运算符就不用for循环了
    return result
};

console.log(intersection([1, 2, 2, 1], [2, 2]));