
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    let num = 0
    let myMap = new Map()
    while (line = await readline()) {
        num++
        if (num % 2 !== 0) {
            line = line.toLowerCase()
            for (let i = 0; i < line.length; i++) {
                if (!myMap.get(line[i])) {
                    myMap.set(line[i], 1)
                } else {
                    let sum = myMap.get(line[i]) + 1
                    myMap.set(line[i], sum)
                }
            }
        }
        if (num % 2 === 0) {
            line = line.toLowerCase()
            if (myMap.has(line)) {
                console.log(myMap.get(line))
            } else {
                console.log(0);
            }
            myMap = new Map()
        }
    }
}()
