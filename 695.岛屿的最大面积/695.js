/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let res = 0
    let result = []
    const isArea = (grid, row, col) => {
        return 0<=row&&0<=col&&row<grid.length&&col<grid[0].length
    }

    const dfs = (grid, row, col) => {

        if(!isArea(grid, row, col)) return
        if(grid[row][col] === 2 || grid[row][col] === 0) return
        if(grid[row][col] === 1) {
            res+=1
        }
        grid[row][col] = 2
        dfs(grid, row-1, col)
        dfs(grid, row+1, col)
        dfs(grid, row, col-1)
        dfs(grid, row, col+1)
    }
    for(let i = 0 ;i <grid.length; i++) {
        for(let j =0; j<grid[0].length;j++){

            dfs(grid,i,j)
            result.push(res)
            res = 0
        }
    }
    return Math.max(...result)
};
console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]));