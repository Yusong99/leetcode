/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let len = grid.length
    let len1 = grid[0].length
    let sum = 0
    for (let i = 0; i < len1; i++) {
        let max = 0
        for (let j = 0; j < len; j++) {
            grid[j].sort((a, b) => a - b)
            let num = grid[j].pop() // 注意这里只能先赋值再运算，不然两次.pop会直接弹栈两次🤡🤡🤡
            max = max > num ? max : num
        }
        sum += max
    }
    return sum
};

console.log(deleteGreatestValue([[1, 2, 4], [3, 3, 1]]));
