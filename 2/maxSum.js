"use strict";

function maxSum (arr) {
    // arr为一堆数字序列
    var len = arr.length;
    arr.unshift(0);
    var sum = [], index = [];
    // sum[i]表示以arr[i]结尾时对应的maxSum,则最终结果为sum[arr.length-1]
    for (let i = 0; i <= len; i++) {
        sum[i] = 0;
        index[i] = 1;
    }

    for (let i = 1; i <= len; i++) {
        if (arr[i] < sum[i - 1] + arr[i]) {
            sum[i] = sum[i - 1] + arr[i];
            index[i] = index[i - 1];
        } else if (sum[i - 1] == 0) {
            // 实现最长的关键
            sum[i] = arr[i];
            index[i] = index[i - 1];
        } else {
            sum[i] = arr[i];
            index[i] = i;
        }
    }
    let max = sum[1], start = 0, end = 0;
    for (let i = 1; i <= len; i++) {
        if (sum[i] >= max) {
            max = sum[i];
            start = index[i];
            end = i;
        }
    }
    return `${max} ${start} ${end}`
}
module.exports = maxSum;
var arr0 = [6, -1, 5, 4, -7],
    arr1 = [0, 6, -1, 1, -6, 7, -5],
    arr2 = [-2, 11, -4, 13, -5, -2];
maxSum(arr0);
maxSum(arr1);
maxSum(arr2);