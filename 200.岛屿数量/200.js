/**
 * @param {character[][]} grid
 * @return {number}
 */
 /* 双重for循环遍历每一个元素
 设置判断条件，超出数组范围就return
 设置dfs主体
  */
var numIslands = function(grid) {
    let res = 0 //设置结果集
    // 进行双重for循环，遍历每一个元素
    for(let i = 0; i<grid.length ;i++) {
        for(let j = 0; j<grid[0].length; j++) {
            // 如果遇到陆地就+1
            if(grid[i][j] === '1') res += 1
            // 进入dfs主体，将遍历过的陆地变为2
            dfs(grid, i, j)
        }
    }
    return res
};

const dfs = (grid, row, col) => {
    // 首先判断在不在矩阵范围内,不然会报错
    if(!isInArea(grid, row, col)) return
    // 判断是否遍历过
    if(grid[row][col] === '2') return
    // 判断是否为海洋（0）
    if(grid[row][col] === '0') return
    // 为陆地，遍历过就设置为2
    grid[row][col] = '2'

    // 递归遍历
    dfs(grid, row+1, col)
    dfs(grid, row-1, col)
    dfs(grid, row, col+1)
    dfs(grid, row, col-1)
}

// 判断在不在矩阵范围内
const isInArea = (grid, row, col) => {
    return row <grid.length && col < grid[0].length && 0 <= row && 0 <= col
}

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));
/*网格状DFS遍历的框架代码
*void dfs(int[][] grid, int r, int c) {
    // 判断 base case
    // 如果坐标 (r, c) 超出了网格范围，直接返回
    if (!inArea(grid, r, c)) {
        return;
    }
    // 访问上、下、左、右四个相邻结点
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}

// 判断坐标 (r, c) 是否在网格中
boolean inArea(int[][] grid, int r, int c) {
    return 0 <= r && r < grid.length
            && 0 <= c && c < grid[0].length;
}
* */
