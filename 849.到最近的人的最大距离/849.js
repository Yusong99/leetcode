/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    // 首先有暴力解法直接遍历每一个座位，看左右两边空座位的数量
    // O(n)解法，遍历一次，统计每两个有人的座位中间空座位的数量

    // 遍历整个数组
    let num = 0 // 设置刚开始的要遍历得到的空位数量
    let res = 0 // 设置结果
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 0) {
            num++
        } else if (seats[i] === 1) {
            if (num === 0) {
                res = Math.max(res, 0)
            } else if (num % 2 !== 0) {
                res = Math.max((num + 1) / 2, res)
                num = 0
            } else if (num % 2 === 0) {
                res = Math.max(num / 2, res)
                num = 0
            }
        }
    }
    //1* 提交第一次未考虑[1,0,0,0]情况
    if (num !== 0) res = Math.max(num, res)
    //2* 提交第二次未考虑[0,0,1]情况
    if(seats[0] === 0) {
        let sum = 0
        for(let k = 0; k < seats.length; k++) {
            if(seats[k] === 0) sum++
            else {
                res = Math.max(sum, res)
                break
            }
        }
    }
    return res
};