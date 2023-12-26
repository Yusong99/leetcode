const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let invalid = 0
    let n = await readline()
    let arr = await readline() // 候选人名
    let myMap = new Map()
    arr = arr.split(' ')
    for(const item of arr) {
        myMap.set(item, 0)
    }
    let peopleNum = await readline()
    let vote = await readline()
    vote = vote.split(' ')
    for(const item of vote) {
        console.log(item);
        if(!myMap.has(item)){
            invalid++
            continue //注意是contiue不是break！！！
        }
        console.log(myMap);
        myMap.set(item, myMap.get(item)+1)
    }
    myMap.forEach((value, key)=>{
        console.log(key+' : '+value);
    })
    console.log('Invalid : '+invalid);
    rl.close()
}()