/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    // 根据已求证的数学公式，只要比较两个数不同的拼接结果，
    // 就可以确定在数组中的顺序
    nums.sort((a,b) => {
        // 先定义按两种不同顺序排列的字符串来比较大小
        let stra = a.toString()+b.toString()
        let strb = b.toString()+a.toString()
        // 因为求的是最大，所以大的放前面
        if(stra>strb){
            return -1
        }else {
            return 1
        }
    })
    // 防止数组里面都是0,因为已经经过排序了，所以如果数组里面第一个是0那么代表都是0
    if (nums[0] === 0) return '0'
    return nums.join('')
};