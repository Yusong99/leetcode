const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    while ((line = await readline())) {
        let tokens = line.split(" ");
        let head = new ListNode(0)
        let len = tokens.shift() - 1
        head.next = new ListNode(+tokens.shift())
        for (let i = 0; i < 2*len; i += 2) {
            let num = head.next
            while (num) {
                if (num.val === +tokens[i+1]) {
                    let node = num.next
                    num.next = new ListNode(+tokens[i])
                    num.next.next = node
                    break
                }
                num = num.next
            }
        }
        let newNode = head.next
        let result = []
        while(newNode){
            if(+newNode.val != +tokens[tokens.length-1]){
                result.push(newNode.val)
            }
            newNode = newNode.next
        }
        console.log(result.join(' '));
    }
})();

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
