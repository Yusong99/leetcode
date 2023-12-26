/**
 * @param {number[][]} grid
 * @return {number}
 */

var shortestPathBinaryMatrix = function (grid) {
    // 广度优先搜索
    // 已经遍历过的节点需要标记一下，不用重复遍历，因为求的是最短的路径，如果两个路径都经过
    // 同一个节点那说明先经过的肯定更快些，也说明这两个路径以后的路径都一样
    // 定义用于搜索的栈
    // 确定边界条件
    if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1
    let queue = []
    queue.push([0, 0])

    const isArray = (arr) => {
        return 0 <= arr[0] && 0 <= arr[1] && arr[0] < grid.length && arr[1] < grid.length
    }
    let count = 0 // 记录最大值
    while (queue.length > 0) {
        count++
        let len = queue.length
        for(let i=0; i<len;i++) {
            let node = queue.shift()
            if (!isArray(node)) continue
            if (grid[node[0]][node[1]] === 1) continue
            if (node[0] === grid.length - 1
                && node[1] === grid.length - 1
                && grid[node[0]][node[1]] === 0) return count
            grid[node[0]][node[1]] = 1
            queue.push([node[0] + 1, node[1] - 1]) //youshang
            queue.push([node[0] - 1, node[1] - 1]) //zuoshang
            queue.push([node[0] - 1, node[1] + 1]) //zuoxia
            queue.push([node[0] + 1, node[1] + 1]) //youxia
            queue.push([node[0] + 1, node[1]]) //you
            queue.push([node[0] - 1, node[1]]) //zuo
            queue.push([node[0], node[1] + 1]) //xia
            queue.push([node[0], node[1] - 1]) //shang
        }
    }
    return -1
};

console.log(shortestPathBinaryMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));