/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let direction = 'north' //朝向
    let point = [0, 0] //圆点
    let result = []
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -1) {
            if (direction === 'north') direction = 'east'
            else if (direction === 'east') direction = 'south'
            else if (direction === 'south') direction = 'west'
            else if (direction === 'west') direction = 'north'
        } else if (commands[i] === -2) {
            if (direction === 'north') direction = 'west'
            else if (direction === 'east') direction = 'north'
            else if (direction === 'south') direction = 'east'
            else if (direction === 'west') direction = 'south'
        } else {
            for (let j = 0; j < commands[i]; j++) {
                if (direction === 'south') {
                    if (compare(point[0], point[1] - 1, obstacles)) break
                    point[1]--
                } else if (direction === 'north') {
                    if (compare(point[0], point[1] + 1, obstacles)) break
                    point[1]++
                } else if (direction === 'west') {
                    if (compare(point[0] - 1, point[1], obstacles)) break
                    point[0]--
                } else {
                    if (compare(point[0] + 1, point[1], obstacles)) break
                    point[0]++
                }
                // result.push(point) // 其一，这里犯了push数组进数组没有用展开运算符的问题！！！⭐⭐⭐
                result.push(point[0] * point[0] + point[1] * point[1])
            }
        }
        result.sort((a, b) => b - a)
        return result[0] || 0
    };
}
function compare(x, y, obstacles) {
    for (let i = 0; i < obstacles.length; i++) {
        if (obstacles[i][0] === x && obstacles[i][1] === y) return true
    }
    return false
}

console.log(robotSim([6, -1, -1, 6], []));