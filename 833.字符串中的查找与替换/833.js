/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
    // 因为indices不是顺序的，所以需要对三个数组进行排序
    let myMap = new Map()
    indices.forEach((item,index) => {
        myMap.set(item, [sources[index], targets[index]])
    })
    let arr = Array.from(myMap)
    arr.sort((a,b) => a[0] - b[0])
    for(let z = 0 ; z < arr.length ;z++) {
        indices[z] = arr[z][0]
        sources[z] = arr[z][1][0]
        targets[z] = arr[z][1][1]
    }
    // 测试函数
    // let str = 'abcabc'
    // console.log(str.indexOf('b')); 找到对应的下标
    // console.log(str.replace('ab', '12')); 替换字符串
    // 首先将字符串s全部存入数组中
    let str = s.split('')
    // 然后遍历，对符合的位置进行遍历
    let k = indices.length // 获取长度k
    for(let i = 0; i<k ;i++) {
        let newStr = '' // 设置一个用于对比的新字符串
        for(let j = indices[i]; j < indices[i]+sources[i].length; j++) {
            newStr += str[j] // 获取一个完整的字符串
        }
        if(newStr === sources[i]) {
            // 注意splice的第二个参数deleteCount 是删除的元素的数目不是删除的结束索引⭐️⭐️⭐️
            str.splice(indices[i], sources[i].length , ...(targets[i].split('')))
            // 加上index
            indices =  indices.map(item => {
                item += targets[i].length - sources[i].length
                return item
            })
        }
    }
    return str.join('')
};
console.log(findReplaceString("vmokgggqzp", [3, 5, 1], ["kg", "ggq", "mo"], ["s", "so", "bfr"]));