/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    // 首先前序和中序遍历获取的数组元素，前序第一个才是根元素
    // 判断是否为空
    if (inorder.length === 0) return null
    // 获取根节点的值
    let rootValue = preorder.shift()
    // 获取根节点在中序节点中的索引
    let rootIndex = 0
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === rootValue) {
            rootIndex = i
            break
        }
    }
    // 定义根节点
    const root = new TreeNode(rootValue)
    root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex))
    root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1))
    return root

    /*总结：slice方法有两个参数时，后一个索引对应的参数取不到，只有一个时，包括写的索引*/
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
