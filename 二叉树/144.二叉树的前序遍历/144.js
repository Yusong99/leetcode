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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    // 递归写法
    const result = []
    function recursion(node = new TreeNode()) {
        if (node) { //注意递归不能用while
            result.push(node.val)
            recursion(node.left)
            recursion(node.right)
        }
    }
    // recursion(root)
    // return result

    // 迭代写法
    const arr = []
    function stackMethod(node) {
        if(!root) return result
        const arr = []
        arr.push(node)
        while(arr.length > 0) {
            node = arr.pop()
            result.push(node.val)
            if(node.right) arr.push(node.right)
            if(node.left) arr.push(node.left)
        }
    }
    stackMethod(root)
    return result
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}