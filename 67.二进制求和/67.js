/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let arrA = a.split('').reverse()
    let arrB = b.split('').reverse()
    let len = Math.max(arrA.length, arrB.length)
    let res = Array(len + 1).fill(0)
    for (let i = 0; i < len; i++) {
        if (i >= arrA.length) {
            let num = +arrB[i] + res[i]
            if (num > 1) {
                res[i + 1] = 1
                res[i] = 0
            } else {
                res[i] = num
            }
        } else if (i >= arrB.length) {
            let num = +arrA[i] + res[i]
            if (num > 1) {
                res[i + 1] = 1
                res[i] = 0
            } else {
                res[i] = num
            }
        } else {
            let num = +arrA[i] + +arrB[i] + res[i]
            if (num === 1) {
                res[i] = 1
            } else if (num === 2) {
                res[i] = 0
                res[i + 1] = 1
            } else if (num === 3) {
                res[i + 1] = 1
            }
        }
    }
    // 去0
    let newArr = res.reverse()
    for (let k = 0; k < newArr.length - 1; k++) {
        if (newArr[k] !== 0) break
        newArr.shift()
        k-- // ⚠️注意这里的k索引应该会随着newArr的索引变化而变化
    }
    return newArr.join('')
};

console.log(addBinary("0", "0"));