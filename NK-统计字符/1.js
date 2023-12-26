const rl = require('readline').createInterface({input: process.stdin})
let iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
void async function () {
    while (line = await readline()) {
        /*空格的ascii为32；小写英文单词ascii为97-122；数组0-9为48-57*/
        let en = 0
        let space = 0
        let num = 0
        let other = 0
        for (let i = 0; i < line.length; i++) {
            if (line.charCodeAt(i) === 32) space += 1
            if (line.charCodeAt(i) <= 122 && line.charCodeAt(i) >= 97) en += 1
            if (line.charCodeAt(i) <= 57 && line.charCodeAt(i) >= 48) num += 1
        }
        other = line.length - space - num - other - en
        console.log(en)
        console.log(space)
        console.log(num)
        console.log(other)
    }
}()
