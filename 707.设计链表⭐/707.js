
class LinkNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

/* 单链表 存储头尾节点 和 节点数量 */
var MyLinkedList = function () {
    this._size = 0
    this._tail = null
    this._head = null
};


/** 
 * @param {number} index
 * @return {number}
 */
// 获取下表为index的节点的值
MyLinkedList.prototype.getNode = function (index) {
    if (index < 0 || index >= this._size) return null
    // 创建虚拟头节点
    let cur = new LinkNode(0, this._head)
    // 0 -> head
    // 创建虚拟头节点dummy_head
    while (index-- >= 0) {
        cur = cur.next
    }
    return cur
};


MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this._size) return -1
    // 获取当前节点
    return this.getNode(index).val
}
/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let node = new LinkNode(val, this._head)
    this._head = node
    this._size++
    // 尾节点只是一个指针作用是指向最后一个元素，如果只有一个也要把尾节点赋值，方便后续操作
    // if(!this._tail){
    //     this._tail = node
    // }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new LinkNode(val, null)
    this._size++
    if (this._tail) {
        this._tail.next = node
        this._tail = node
        return
    }
    this._tail = node
    this._head = node
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index > this._size) return
    if (index <= 0) {
        this.addAtHead(val)
        return
    }
    if (index === this._size) {
        this.addAtTail(val)
        return
    }
    // 获取目标节点的上一个节点
    const node = this.getNode(index - 1)
    node.next = new LinkNode(val, node.next)
    this._size++

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this._size) return
    if (index === 0) {
        this._head = this._head.next
        // 如果要删除的这个节点同时是尾节点，要处理尾节点
        if (index === this._size - 1) {
            this._tail = this._head
        }
        this._size--
        return
    }
    // 获取目标节点的上一个的节点
    const node = this.getNode(index - 1)
    node.next = node.next.next
    // 处理尾节点
    if (index === this._size - 1) {
        this._tail = node
    }
    this._size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */