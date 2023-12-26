/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let myMap = new Map()
    // 这道题的本质就是找到最经常出现的右边界到左边界的距离
    for (let i = 0; i < wall.length; i++) {
        let sum = 0
        for (let j = 0; j < wall[i].length - 1; j++) {
            sum += wall[i][j]
            myMap.set(sum, (myMap.get(sum) || 0) + 1)
        }
    }
    let maxNum = 0
    for (const [key, value] of myMap.entries()) {
        maxNum = Math.max(maxNum, value)
    }
    // let arr = Array.from(myMap)
    // if (arr.length === 0) return wall.length
    // arr.sort((a, b) => {
    //     console.log(a, b);
    //     return b[1] - a[1]
    // })
    return wall.length - maxNum
};

console.log(leastBricks([[1, 2, 2, 1], [3, 1, 2], [1, 3, 2], [2, 4], [3, 1, 2], [1, 3, 1, 1]]));