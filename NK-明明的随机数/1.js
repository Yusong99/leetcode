const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 考察数组去重和排序
void async function () {
    // Write your code here
    let num = 0
    let mySet = new Set()
    let result = []
    let count
    while (line = await readline()) {
        num++
        if (num === 1) {
            count = +line
        }
        if (num > 1) {
            mySet.add(line)
        }
        if (num === count + 1) {
            for (item of mySet) {
                result.push(item)
            }
            result.sort((a, b) => a - b)
            for (let i = 0; i < result.length; i++) {
                console.log(result[i])
            }
        }
    }
}()
