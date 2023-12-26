const rl = require('readline').createInterface({ input: process.stdin })
let iter = rl[Symbol.asyncIterator]()
const readline = async () => (await iter.next()).value
void async function () {
    let sum = await readline()
    let arr = []
    for (let i = 0; i < sum; i++) {
        arr.push(await readline())
    }
    let myMap = new Map()
    for (let j = 0; j < arr.length; j++) {
        myMap.set(arr[j], (myMap.get(arr[j]) || 0) + 1)
    }
    let arr1 = Array.from(myMap)
    arr1.sort((a, b) => b[1] - a[1])
    let l = 0
    let left = 0
    let right = 0
    let r = arr.length - 1
    for (let i = l; i < arr.length; i++) {
        if (arr[i] === arr1[0][0]) {
            left = i
            break
        }
    }
    for (let i = r; i > 0; i--) {
        if (arr[i] === arr1[0][0]) {
            right = i
            break
        }
    }
    console.log(right - left);
    rl.close()
}()