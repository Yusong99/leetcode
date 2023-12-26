class tree {
    constructor(val, left, right) {
        this.val = val === undefined ? null : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

const n1 = new tree(1)
const n2 = new tree(2)
const n3 = new tree(3)
n1.left = n2
n1.right = n3
console.log(n1.left.val);