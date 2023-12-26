/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    // 这题跟102题一样，就是102的结果做一个reverse
    let result = []
    let queue = []
    if (!root) return []
    queue.push(root)
    while (queue.length > 0) {
        let newArr = []
        let len = queue.length // ⭐⭐⭐
        /* for循环中如果限制条件就是数组的长度， 然后再循环体中又用到了数组，长度会变化的话限制条件也会变化！！！ */
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            newArr.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        // result.push(newArr)
        //  or 直接反向插入
        result.unshift(newArr)
    }
    // return result.reverse()
    return result
};