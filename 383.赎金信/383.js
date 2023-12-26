/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // map方法，适用于字符串组成元素不固定
    // let myMap = new Map()
    // for (let i = 0; i < magazine.length; i++) {
    //     if(!myMap.has(magazine[i])){
    //         myMap.set(magazine[i], 1)
    //     }else{
    //         let num = myMap.get(magazine[i]) + 1
    //         myMap.set(magazine[i], num)
    //     }
    // }
    // for (let j = 0; j < ransomNote.length; j++) {
    //     if (!myMap.has(ransomNote[j])) {
    //         return false
    //     }else{
    //         let num = myMap.get(ransomNote[j]) - 1
    //         if(num<0) return false
    //         myMap.set(ransomNote[j], num)
    //     }
    // }
    // return true

    // 普通哈希表方法
    let arr = Array(26).fill(0)
    for(let i = 0; i<magazine.length; i++){
        arr[(magazine[i].charCodeAt())%97]++
    }

    for(let j = 0; j<ransomNote.length; j++){
        arr[(ransomNote[j].charCodeAt())%97]--
        if(arr[(ransomNote[j].charCodeAt())%97] < 0) return false
    }

    return true
};