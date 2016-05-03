"use strict";
class PriorityQueue {
    constructor() {
        this._arr = [];
        this.heapSize = 0;
    }
    maximum() {
        // 返回最大键字的元素
        return this._arr[0];
    }

    parent(index) {
        return Math.floor(index / 2);
    }

    left(index) {
        return 2 * index;
    }

    right(index) {
        return 2 * index + 1;
    }

    maxHeapIfy(index) {
        //堆调整方法 index为要开始调整的根节点
        let left = this.left(index);
        let right = this.right(index);
        let large = index;
        if (left <= this.heapSize && this._arr[left] > this._arr[index]) {
            large = left;
        }
        if (right <= this.heapSize && this._arr[right] > this._arr[large]) {
            large = right;
        }
        if (large != index) {
            //发生了调整，递归进行
            let tmp = this._arr[index];
            this._arr[index] = this._arr[large];
            this._arr[large] = tmp;
            this.maxHeapIfy(large)
        }
    }

    extractMax() {
        //去掉并返回最大键字元素
        if (this.heapSize < 1) {
            return "Error";
        } else {
            let max = this._arr[0];
            this._arr[0] = this._arr[this.heapSize - 1];
            this.heapSize--;
            this.maxHeapIfy(0);
            return max;
        }
    }

    increaseKey(x, k) {
        //将元素x的关键字值增加到k
        if (this._arr[x] > k) {
            return "the value of k should not be smaller than x"
        } else {
            this._arr[x] = k;
            while (x > 0 && this._arr[this.parent(x)] < this._arr[x]) {
                //需要去向上替换
                let tmp = this._arr[this.parent(x)];
                this._arr[this.parent(x)] = this._arr[x];
                this._arr[x] = tmp;
                x = this.parent(x);
            }
        }
    }

    insert(x) {
        //将元素x插入
        this._arr[this.heapSize] = x;
        this.heapSize++;
        this.increaseKey(this.heapSize - 1, x);
        return true;
    }
}
module.exports = PriorityQueue;