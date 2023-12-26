/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    // 动态规划思路
    let len = s.length
    if (len < 2) return s // 如果s的长度小于2那么回文子串就是它自己
    let maxLen = 1
    let begin = 0
    // dp[i][j]表示s[i..j]是否是回文串
    // js中定义二维数组不能直接用Array().fill(Array())因为会填充进相同的内存地址⭐️⭐️⭐️
    let dp = Array.from({ length: len }, () => new Array(len).fill(false));
    // 初始化：所有长度为1的子串都是回文串
    for (let i = 0; i < len; i++) {
        dp[i][i] = true
    }

    let charArray = s.split('') // 将字符串转为数组
    // 递推开始
    // 先枚举子串长度
    for (let L = 2; L <= len; L++) {
        // 枚举左边界，左边界的上限设置可以宽松一些
        for (let i = 0; i < len; i++) {
            // 由L和i可以确定右边界，即j - i + 1 = L得
            let j = L + i - 1
            // console.log(i, j, begin, maxLen, charArray[i], charArray[j]);

            // 如果右边界越界，就可以退出当前循环
            if (j >= len) {
                break
            }
            if (charArray[i] !== charArray[j]) {
                dp[i][j] = false
            } else {
                if (j - i < 3) {
                    dp[i][j] = true
                } else {
                    // console.log(i+1,j-1,dp[i + 1][j - 1]);
                    dp[i][j] = dp[i + 1][j - 1]
                }
                // console.log(i, j, dp[i][j]);
            }

            // 只要 dp[i][L] === true 成立，就表示子串s[i..L]是回文
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1
                begin = i
            }
        }
    }
    return s.substring(begin, begin + maxLen)
};

// 判断字符串是否相同
const isEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

console.log(longestPalindrome("abcba"));
