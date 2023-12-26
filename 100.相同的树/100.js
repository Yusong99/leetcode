/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let flag = true
    const compare = (p,q)=>{
        if((p && !q) ||  (!p && q)) return flag = false
        if(p && q) {
            if(p.val !== q.val) return flag = false
            compare(p.left, q.left)
            compare(p.right, q.right)
        }
    }
    compare(p,q)
    return flag
};
