const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let num = await readline()
    console.log(cubeRoot(parseFloat(num)));
}()

function cubeRoot(val) {
    if (val === 0) return 0; // 特殊情况处理，立方根为0

    let low = Math.min(-1, val);
    let high = Math.max(1, val);
    let diff = 1e-3; // 设置精度，保留一位小数
    let ans = (low + high) / 2.0
    while (Math.abs(ans * ans * ans - val) >= diff) {
        if (ans * ans * ans < val) {
            low = ans
        } else {
            high = ans
        }
        ans = (low + high) / 2.0
    }

    return ans.toFixed(1);
}

