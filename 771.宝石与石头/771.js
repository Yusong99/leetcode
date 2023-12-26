/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let mySet = new Set()
    let arr1 = jewels.split('')
    let arr2 = stones.split('')
    for (let i = 0; i < arr1.length; i++) {
        mySet.add(arr1[i])
    }
    let num = 0
    for (let index = 0; index < arr2.length; index++) {
        if (mySet.has(arr2[index])) num++
    }
    return num
};