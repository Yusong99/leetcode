/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // 这题要是机试中遇到了可以直接调库函数试试看能不能过
    // 库函数是indexOf, String.prototype.indexOf 用于在字符串中返回第一次出现的指定值的索引
    return haystack.indexOf(needle)
};