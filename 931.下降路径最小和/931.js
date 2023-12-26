/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
    // 深度优先搜索还很薄弱！需要练习！
    let min = matrix[0, 0] + matrix[1][0]
    let n = matrix[0].length
    let result = []
    let count = 0
    function getMin(arr = []) {
        for (let i = 0; i < arr.length; i++) {
            recursion(matrix[0][i], 0, i)
        }
    }
    function recursion(num, row, col) {
        if (row + 1 < n && col > 0 && matrix[row + 1][col - 1]) {
            result.push(matrix[row + 1][col - 1])
            recursion(matrix[row + 1][col - 1], row + 1, col - 1)
        }
        if (row + 1 < n && matrix[row + 1][col]) {
            result.push(matrix[row + 1][col])
            recursion(matrix[row + 1][col], row + 1, col)
        }
        if (row + 1 < n && col + 1 < n && matrix[row + 1][col + 1]) {
            result.push(matrix[row + 1][col + 1])
            recursion(matrix[row + 1][col + 1], row + 1, col + 1)
        }
    }
    getMin(matrix)
    console.log(result);
};
minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]])