const rl = require("readline").createInterface({input: process.stdin});
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
let count = 0
void async function () {
    let arr = await readline()
    let newArr = arr.split(' ')
    let [N, M] = newArr
    let binaryArr = []
    while (N > 0) {
        let arr = await readline()
        let newArr = arr.split(' ')
        binaryArr.push(newArr)
        N--
    }
    for (let i = 0; i < binaryArr.length; i++) {
        for (let j = 0; j < binaryArr[0].length; j++) {
            if (binaryArr[i][j] === '0') continue
            dfs(i, j, binaryArr)
            count++
        }
    }
    console.log(count)
    rl.close()
}()

function dfs(row, col, grid) {
    if (!isArray(col, row, grid)) return
    if (grid[row][col] === '0') return;
    grid[row][col] = '0'
    dfs(row + 1, col, grid)
    dfs(row, col + 1, grid)
    dfs(row + 1, col + 1, grid)
    dfs(row - 1, col - 1, grid)
    dfs(row - 1, col, grid)
    dfs(row, col - 1, grid)
    dfs(row - 1, col + 1, grid)
    dfs(row + 1, col + 1, grid)
}

function isArray(row, col, grid) {
    return 0 <= row && 0 <= col && row < grid.length && col < grid[0].length
}
