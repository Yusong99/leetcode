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
var levelOrder = function (root) {
    if (!root) return []
    const result = [] //存储结果
    const queue = [] //用于解题的队列
    root && queue.push(root) //将根节点入队
    while (queue.length > 0) {
        let newArr = [] //用于存放每一层的节点
        let len = queue.length
        // 遍历得到每一层的所有节点
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            newArr.push(node.val)
            // 这里需要做判断防止将null存进去，可以用逻辑中断
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        // 得到每一层的数据后将数组放进结果数组
        result.push(newArr)
    }
    return result
};
