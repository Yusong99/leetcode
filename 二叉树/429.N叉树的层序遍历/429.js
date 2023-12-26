/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // 这题的数据结构是，节点里的children是一个节点数组，表示该节点的孩子
    // 数组里有多少个节点就有多少个孩子
    const queue = []
    const result = []
    if (!root) return []
    queue.push(root)
    while (queue.length > 0) {
        let arr = []
        let len = queue.length
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            if (!node) continue
            arr.push(node.val)
            for (let j = 0; j < node.children.length; j++) {
                queue.push(node.children[j])
            }
        }
        result.push(arr)
    }
    return result
};