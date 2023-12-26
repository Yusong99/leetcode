const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let num = 0
    let count = 0
    let type = 0
    let myMap = [] //注意这里的key可能重复，所以直接用数组存键值对！！！
    // Write your code here
    while (line = await readline()) {
        num++
        if (num === 1) {
            count = +line
        }
        else if (num === 2) {
            type = +line
        }
        // 表示第二个之后才是要进入Map的
        else if (num > 2 && num <= count + 2) {
            let str = line.split(' ')
            myMap.push([str[0], str[1]])
        }
        if (num === count + 2) {
            result = myMap
            if (type === 0) {
                result.sort((a, b) => b[1] - a[1])
            } else {
                result.sort((a, b) => a[1] - b[1])
            }
            for (let i = 0; i < result.length; i++) {
                console.log(result[i][0], result[i][1]);
            }
        }
    }
}()
