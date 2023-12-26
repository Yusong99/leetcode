/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function(grid) {
    let res = 0 // 存储结果

    const isInArea = (grid, row, col) => {
    if (row < 0 || row > grid.length-1 || col<0 || col > grid[0].length-1) {
        res += 1
        return false
    }
    return true
}

    const dfs = (grid, row, col) => {
    if(!isInArea(grid, row, col)) return
    if(grid[row][col] === 2){
        return
    }
    if(grid[row][col] === 0){
        res+=1
        return
    }
    grid[row][col] = 2
    dfs(grid, row-1, col)
    dfs(grid, row+1, col)
    dfs(grid, row, col-1)
    dfs(grid, row, col+1)
}

    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 0) continue
            dfs(grid, i, j)
        }
    }

    return res
};






console.log(islandPerimeter( [[1,0]]));