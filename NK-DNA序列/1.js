const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let num = 0
    let count = 0
    let str = ''
    while (line = await readline()) {
        num++
        if (num % 2 === 0) {
            count = Number(line)
        } else {
            str = line
        }

        if (num % 2 === 0 && num > 0) {
            let max = 0
            let maxStr = str
            let strNum = 0
            for (let i = 0; i < str.length - count; i++) {
                let newStr = str.substring(i, i + count)
                for (let j = 0; j < newStr.length; j++) {
                    if (newStr[j] === 'C' || newStr[j] === 'G') {
                        strNum++
                    }
                }
                let newMax = strNum / (newStr.length)
                if (newMax > max) {
                    maxStr = newStr
                    max = newMax
                }
                strNum = 0
            }
            console.log(maxStr);
        }
    }
}()