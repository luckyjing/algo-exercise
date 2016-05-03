/**
 * Created by luckyjing on 16/3/29.
 */
var assert = require('assert');
var Queue = require('./priority queue-compiled');
var queue = new Queue();
var quickSort = require('../排序/quickSort');
describe('priority queue', function () {
    describe('#insert', function () {
        it('should return true and the heapSize will be increase', function () {
            queue.insert(1);
            assert.equal(queue.heapSize, 1);
        });
        it('the heapSize will be 2', ()=> {
            queue.insert(100);
            assert.equal(queue.heapSize, 2)
        })
    });
    describe('#extractMax', ()=> {
        it('should return 100 and heapSize will be 1', ()=> {
            assert.equal(queue.extractMax(), 100);
            assert.equal(queue.heapSize, 1);
        })
    })
    describe('#increaseKey', ()=> {
        it('should return 200', ()=> {
            queue.insert(10);
            queue.insert(20);
            queue.insert(30);
            queue.increaseKey(2, 200);
            assert.equal(queue.maximum(), 200);
        })
    })
});
describe('测试快速排序', ()=> {
    var length = 20;
    var arr = [], arr_tmp = [];
    while (length) {
        var tmp = Math.floor(Math.random() * 1000);
        arr.push(tmp);
        arr_tmp.push(tmp);
        length--;
    }
    quickSort(arr);
    arr_tmp.sort((a, b)=>a - b);
    it('should be same with the array.sort()', ()=> {
        assert.deepEqual(arr, arr_tmp);
    })
});
var plus = require("./plusx-compiled");
describe("测试判断是否存在和为x的元素", ()=> {
    describe('#hasSame', ()=> {
        it('should return 4', ()=> {
            var arr = [1, 2, 3, 4, 4];
            assert.deepEqual(plus.hasSame(arr), 4);
        })
    });
    describe('#excludeSame', ()=> {
        it('should be pass', ()=> {

            var arr = [1, 2, 3, 2, 3, 4, 5, 6, 7, 9, 7, 8, 9, 8];
            assert.deepEqual(plus.excludeSame(arr).data, [1, 2, 3, 4, 5, 6, 7, 9, 8])
        });
        it('should be equal', ()=> {

            var arr = [1, 2, 3, 4, 2, 3];
            assert.equal(plus.excludeSame(arr, 4).data, 2);
            assert.equal(plus.excludeSame(arr, 9).data, 3);
        })
    });
    describe('#isExistPlusX', ()=> {
        it('should return ture', ()=> {
            var arr = [1, 2, 3, 6, 9, 100, 10];
            assert.equal(plus.isExistPlusX(arr, 101).data, 1 || 100);
            assert.equal(plus.isExistPlusX(arr, 3).data, 1 || 2);
            assert.equal(plus.isExistPlusX(arr, 10).data, 1 || 9);
        })
    })
});
var findKth = require('./question4');
describe("测试找到第k小的元素", ()=> {
    it('shoule be return ', ()=> {
        var a = [34, 89, 345, 678, 900], b = [12, 98, 102, 200, 302];
        //  12 34 89 98 102  200 302 345 678 900
        assert.equal(findKth(a, b, 2), 89)
    })
});