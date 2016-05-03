/**
 * Created by luckyjing on 16/3/24.
 */
function findKth(a, b, k) {
    var a_len = a.length,
        b_len = b.length;
    if (k < 1 || k > a_len + b_len) {
        console.log(a_len);
        console.log(b);
        return "您输入的参数有问题";
    }
    var i = parseInt(Math.random() * a_len);
    if(i>=k){
        i=k;
    }
    var j = k - i - 1;
    // 只剩一个数组时
    if (a_len == 0) {
        return b[k - 1];
    } else if (b_len == 0) {
        return a[k - 1];
    }
    // get numbers to compare
    var a_i = a[i],
        a_i_1 = (i - 1) >= 0 ? a[i - 1] : "out";

    var b_j = b[j],
        b_j_1 = (j - 1) >= 0 ? b[j - 1] : "out";
    if (a_i < b_j) {
        // find
        if (b_j_1 == "out") {
            return a_i;
        } else if (a_i > b_j_1) {
            return a_i;
        }
    } else if (b_j < a_i) {
        if (a_i_1 == "out") {
            return b_j;
        } else if (b_j > a_i_1) {
            return b_j;
        }
    }

    if (a_i < b_j) {
        //应当舍弃当前的Ai和其左边所有元素
        var index = i + 1;
        return findKth(a.slice(index), b, k - i - 1);
    } else {
        //应当舍弃当前的Bi和其右边所有元素
        var index = j - 1;
        if (index < 0) {
            index = 0;
        }
        return findKth(a, b.slice(0, index), k - j - 1);
    }
}
module.exports = findKth;
var a = [34, 89, 345, 678, 900], b = [12, 98, 102, 200, 302];
//  12 34 89 98 102 200 302 345 678 900
console.log(findKth(a, b, 7));