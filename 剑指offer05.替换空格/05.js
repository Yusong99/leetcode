/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    // 这题方法很多，但是我选双指针法，其他方法没什么技巧
    let arr = s.split('')
    let num = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            num++
        }
    }
    let r = arr.length + num * 2 - 1
    let l = arr.length - 1
    console.log(r, l);
    while (l >= 0) {
        console.log(l);
        if (arr[l] === ' ') {
            arr[r--] = '0'
            arr[r--] = '2'
            arr[r--] = '%'
        }else{
            // 这一步是为了让不是空格的元素也能同步上去！
            arr[r--] = arr[l]
        }
        l--
    }
    return arr.join('')
};

console.log(replaceSpace("We are happy."))