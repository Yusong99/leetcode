/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    // js实现思路
    // 判断是否为空节点
    if (postorder.length === 0) return null
    // 从后序遍历数组中获取根节点，也就是最后一个节点
    const rootVal = postorder.pop()
    // 获取中间节点在中序遍历中的下标
    let rootIndex = inorder.indexOf(rootVal) //indexOf如果不存在就返回-1
    // 创建中间节点
    const root = new TreeNode(rootVal)
    // 创建左节点, 天才的算法
    root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex))
    root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex))
    return root

    // 基本思路
    // // 第一步：判断是否为空节点
    // if (postorder.length === 0) return null
    // // 第二步：后序遍历数组最后一个元素就是当前的中间节点
    // let rootValue = postorder[postorder.length - 1]
    // let root = new TreeNode(rootValue)
    //
    // // 叶子节点
    // if (postorder.length === 1) return root
    //
    // // 第三步：找切割点
    // let index
    // for (index = 0; index < inorder.length; index++) {
    //     if (inorder[index] === rootValue) break
    // }
    //
    // // 第四步：切割中序数组，得到中序左数组和中序右数组
    // let midLeft = inorder.slice(0, index)
    // let midRight = inorder.slice(index + 1, inorder.length)
    // // 第五步：切割后序数组，得到后序左数组和后序右数组
    // let lastLeft = inorder.slice(0, index)
    // let lastRight = inorder.slice(index + 1, inorder.length)
    //
    // root.left = buildTree()
    // root.right = buildTree()
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
