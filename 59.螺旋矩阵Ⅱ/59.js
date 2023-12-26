/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let startX = 0
    let startY = 0
    let offset = 1
    let result = 1
    let arr = Array(n)
    for (let x = 0; x < n; x++) {
        arr[x] = Array(n)
    }
    for (let num = 0; num < Math.floor(n / 2); num++) { //转多少圈
        // 从右到左
        for (let i = 0; i < n - offset; i++) {
            console.log(startX, startY, 'i');
            arr[startX][startY] = result++
            startY++
        }
        // 从上到下
        for (let j = 0; j < n - offset; j++) {
            console.log(startX, startY, 'j');
            arr[startX][startY] = result++
            startX++
        }
        // 从左到右
        for (let k = 0; k < n - offset; k++) {
            console.log(startX, startY, 'k');
            arr[startX][startY] = result++
            startY--
        }
        // 从下到上
        for (let l = 0; l < n - offset; l++) {
            console.log(startX, startY, 'l');
            arr[startX][startY] = result++
            startX--
        }
        startX++
        startY++
        offset += 2
    }
    if (n % 2 !== 0) arr[startX][startY] = n * n
    return arr
};
console.log(generateMatrix(3));