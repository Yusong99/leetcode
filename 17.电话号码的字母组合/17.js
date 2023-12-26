/**
 * @param {string} digits
 * @return {string[]}
 */
let xys = {}
xys.nums2 = ['a', 'b', 'c']
xys.nums3 = ['d', 'e', 'f']
xys.nums4 = ['g', 'h', 'i']
xys.nums5 = ['j', 'k', 'l']
xys.nums6 = ['m', 'n', 'o']
xys.nums7 = ['p', 'q', 'r', 's']
xys.nums8 = ['t', 'u', 'v']
xys.nums9 = ['w', 'x', 'y', 'z']
var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    let newArr = xys['nums' + digits[0]]
    for (let i = 0; i < digits.length - 1; i++) {
        newArr = calu(newArr, xys['nums' + digits[i + 1]])
    }
    return newArr
};

function calu(arr1, arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            newArr.push(arr1[i] + arr2[j])
        }
    }
    return newArr
}

console.log(letterCombinations('234'));