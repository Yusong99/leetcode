/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let stack = []
    // 遍历数组
    for(let c of num) {
        // 1.删除的数字不到k个
        // 2.前一位的数字大与当前位
        while(k && stack[stack.length -1] > c) {
            // 删除前面大的数字
            stack.pop()
            k--
        }
        // 如果是前置0 就不用放入栈了，避免[0,..,1]这种情况
        if(!stack.length&&c==='0') continue
        stack.push(Number(c))
    }
    // 如果删除的个数不到k，则从后删除剩余个数
    k&&stack.splice(-k)
    return stack.join('') || '0'
};

// console.log(removeKdigits('10200', 1));

let removeNum = (num, k) => {
    // 暴力解法 n的立方
    // 栈解法
    // 遍历字符串 for...of
    let stack = []
    for(const w of num) {
        while(k && stack[stack.length - 1] > w)  {
            stack.pop() // 弹出栈的最后一个
            k-- // 要移掉多少个，每移掉一个就k--
        }
        // 如果是前置零就不用放入栈中:判断前置零：栈的长度为零，然后w为0
        if(!stack.length && w === '0') continue
        stack.push(Number(w))
    }
    // 如果删除的个数不到k，则从后面删除剩余个数
    k&&stack.splice(-k)
    console.log(stack.join('') || 0); 
}

removeNum("1234",1)