/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length <= 0) return 0
    // 这题的话我的思路是，在遍历中监测是否在set中
    let stack = []
    let max = 1
    for (let i = 0; i < s.length; i++) {
        if (stack.includes(s[i])) {
            stack.splice(0, stack.findIndex((item) => item === s[i]) + 1) // 将栈重复元素之前的全部出栈
        }
        stack.push(s[i])
        // 应该在添加完就判断是否是最大，因为既然能添加就说明是s[i]肯定不是重复的
        max = max > stack.length ? max : stack.length
    }
    return max
};

console.log(lengthOfLongestSubstring("au"));