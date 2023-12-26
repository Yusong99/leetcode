const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    /* 注意求到所有元素距离最短时只要求中位数即可 */
    let str = await readline()
    console.log(str);
    rl.close()
}()