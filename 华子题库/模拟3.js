const rl = require("readline").createInterface({input: process.stdin});
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let M = await readline()
    let arr = await readline()
    arr = arr.split(' ').map(item => parseInt(item))
    let left = 0
    let right = 0
    let result = []
    while (right < arr.length) {
        // 如果右边界已经超过了M
        if (arr[right] > M) {
            left = right + 1
            right += 1
            continue
        }
        // 计算区间之和
        let sum = 0
        for (let i = left; i <= right; i++) {
            sum += +arr[i]
        }
        // 如果区间之和小于M
        if (sum < M) {
            right++
        }
        // 如果区间之和大于M
        if (sum > M) {
            result.push(sum - arr[right]) //将上一次和存入结果集
            left++
        }
        //如果区间之和等于M
        if (sum === +M) {
            console.log(M)
            rl.close()
            return
        }
    }
    console.log(result)
}()
