/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let mySet = new Set()
    while (true) {
        let sum = 0
        // 一定要注意类型！！！Number没有.length方法！⭐
        // for (let i = 0; i < n.length; i++) {
        //     sum += n[i] * n[i]
        //     console.log((sum));
        // }
        let str = n.toString()
        for (let i = 0; i < str.length; i++) {
            sum += str[i] * str[i]
        }
        if (sum === 1) return true
        if (mySet.has(sum)) return false
        mySet.add(sum)
        n = sum
    }
};

console.log(isHappy(19));