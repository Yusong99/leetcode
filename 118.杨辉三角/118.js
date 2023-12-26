/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [[1]]
    for (let i = 1; i < numRows; i++) {
        let newArr = []
        for (let j = 0; j <= i; j++) {
            let sum = 0
            if (res[i - 1][j - 1]) sum += res[i - 1][j - 1]
            if (res[i - 1][j]) sum += res[i - 1][j]
            newArr.push(sum)
        }
        res.push(newArr)
    }
    return res
};