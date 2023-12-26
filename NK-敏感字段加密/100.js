const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    // Write your code here
    while(line = await readline()){
        let tokens = line.split('');
        while(tokens.length > 8){
            console.log(tokens.splice(0,8).join(''))
        }
        if(tokens.length<=8){
            for(let i =tokens.length;i  < 8;i++){
                tokens.push(0)
            }
            console.log(tokens.join(''))
        }
    }
}()
