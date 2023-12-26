/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 注意不能写在外面，不然过用例的时候会重复看path和result
// let path = []
// let result = []
var combine = function (n, k) {
    let result = []
    let path = []
    let tag = Array(n).fill(false)
    // 布尔数组方法
    // const backtrack = (result, path, tag) => {
    //     if(path.length === k){
    //         result.push([...path])
    //         return
    //     }
    //     for(let i =1  ;i <= n;i++){
    //         if(tag[i]) break
    //         tag[i] = true
    //         path.push(i)
    //         backtrack(result, path, tag)
    //         path.pop()
    //         tag[i] = false
    //     }
    // }
    // 索引方法
    let index = 1
    const backtrack = (result, path, index) => {
        if (path.length === k) {
            result.push([...path])
            return
        }
        for (let i = index; i <= n; i++) {
            path.push(i)
            backtrack(result, path, i + 1)
            path.pop()
        }
    }
    backtrack(result, path, index)
    return result
};

console.log(combine(4, 2))
