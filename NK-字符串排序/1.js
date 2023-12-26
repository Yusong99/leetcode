const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    let n = await readline()
    let arr = []
    while (n > 0) {
        let str = await readline()
        arr.push(str)
        n--
    }
    arr.sort((a, b) => {
        let n = 0
        while (a[n] === b[n]) {
            n++
            if (!a[n] || !b[n]) return a.length - b.length
        }
        return a[n].charCodeAt() - b[n].charCodeAt()
    })
    for (let str of arr) {
        console.log(str);
    }
    rl.close()
})();
