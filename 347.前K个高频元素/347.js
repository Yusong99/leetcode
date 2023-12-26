/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map()
    // // 第一种方法:直接用map存入再遍历取值
    for (const num of nums) {
        // ??运算符用于准确判断是否为undefined或者null
        map.set(num, (map.get(num) ?? 0) + 1) //⭐
    }

    // //map数据结构的entries方法可以返回一个新的可迭代对象
    // // 注意map本身就是可迭代的
    // // Array.from(obj, ?function)可以从一个可迭代对象生成新的数组
    // const arr = Array.from(map)
    // arr.sort((a, b) => b[1] - a[1])
    // console.log(arr);
    // const result = []
    // for (let i = 0; i < k; i++) {
    //     result.push(arr[i][0])
    // }
    // return result

    // 第二种方法:手动构建堆数据解构
    // 手动创建最小堆⭐
    class MinHeap {
        constructor() {
            this.heap = []; // 用数组存储堆元素
        }

        // 向堆中插入一个元素
        insert(value) {
            this.heap.push(value); // 将新元素插入到数组末尾
            this.heapifyUp(this.heap.length - 1); // 从新元素的位置开始执行上浮操作
        }

        // 删除堆顶元素并返回其值
        removeTop() {
            if (this.isEmpty()) {
                return null;
            }
            const top = this.heap[0]; // 缓存堆顶元素的值
            this.heap[0] = this.heap.pop(); // 用数组末尾元素替换堆顶元素
            this.heapifyDown(0); // 从堆顶元素开始执行下沉操作
            return top; // 返回堆顶元素的值
        }

        // 判断堆是否为空
        isEmpty() {
            return this.heap.length === 0;
        }

        // 上浮操作，将元素上浮到合适的位置以维护堆的性质
        heapifyUp(index) {
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2); // 计算父节点索引
                if (this.heap[index] >= this.heap[parentIndex]) {
                    break; // 如果当前元素大于等于父节点，则终止上浮操作
                }
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // 交换当前元素与父节点的值
                index = parentIndex; // 更新当前元素索引为父节点索引，继续向上比较
            }
        }

        // 下沉操作，将元素下沉到合适的位置以维护堆的性质
        heapifyDown(index) {
            const heapSize = this.heap.length;
            let childIndex = 2 * index + 1; // 左子节点索引
            while (childIndex < heapSize) {
                // 判断右子节点是否存在且更小
                if (childIndex + 1 < heapSize && this.heap[childIndex + 1] < this.heap[childIndex]) {
                    childIndex++; // 如果右子节点更小，则将子节点索引更新为右子节点索引
                }
                // 如果当前元素小于等于子节点，则终止下沉操作
                if (this.heap[childIndex] >= this.heap[index]) {
                    break;
                }
                [this.heap[index], this.heap[childIndex]] = [this.heap[childIndex], this.heap[index]]; // 交换当前元素与子节点的值
                index = childIndex; // 更新当前元素索引为子节点索引，继续向下比较
                childIndex = 2 * index + 1; // 更新左子节点索引
            }
        }
    }

    // js 没有堆 需要自己构造
class Heap {
    constructor(compareFn) {
        this.compareFn = compareFn;
        this.queue = [];
    }

    // 添加
    push(item) {
        // 推入元素
        this.queue.push(item);

        // 上浮
        let index = this.size() - 1; // 记录推入元素下标
        let parent = Math.floor((index - 1) / 2); // 记录父节点下标

        while (parent >= 0 && this.compare(parent, index) > 0) { // 注意compare参数顺序
            [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];

            // 更新下标
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }
    }

    // 获取堆顶元素并移除
    pop() {
        // 堆顶元素
        const out = this.queue[0];

        // 移除堆顶元素 填入最后一个元素
        this.queue[0] = this.queue.pop();

        // 下沉
        let index = 0; // 记录下沉元素下标
        let left = 1; // left 是左子节点下标 left + 1 则是右子节点下标
        let searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;

        while (searchChild !== undefined && this.compare(index, searchChild) > 0) { // 注意compare参数顺序
            [this.queue[index], this.queue[searchChild]] = [this.queue[searchChild], this.queue[index]];

            // 更新下标
            index = searchChild;
            left = 2 * index + 1;
            searchChild = this.compare(left, left + 1) > 0 ? left + 1 : left;
        }

        return out;
    }

    size() {
        return this.queue.length;
    }

    // 使用传入的 compareFn 比较两个位置的元素
    compare(index1, index2) {
        // 处理下标越界问题
        if (this.queue[index1] === undefined) return 1;
        if (this.queue[index2] === undefined) return -1;

        return this.compareFn(this.queue[index1], this.queue[index2]);
    }

}
};

console.log(topKFrequent([-1, -1], 1));