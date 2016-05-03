"use strict";
function getNext (result, i, j, x, y) {
    if (x[i] == y[j]) {
        // choose result[i-1][j-1]
        return {
            i: i - 1,
            j: j - 1
        }
    }
    if (result[i - 1][j] >= result[i][j - 1]) {
        return {
            i: i - 1,
            j: j
        }
    } else {
        return {
            i: i,
            j: j - 1
        }
    }
}
function printLCS (result, x, y, i, j, arr) {
    if (!arr) {
        arr = [];
    }
    if (i == 0 || j == 0) {
        return;
    } else {
        var next = getNext(result, i, j, x, y);
        if (next.i == i - 1 && next.j == j - 1) {
            arr.unshift(x[i]);
        }
        printLCS(result, x, y, next.i, next.j, arr);
    }
    return arr.join("->");
}
function LCS (x, y) {
    var log = [];
    let xLen = x.length,
        yLen = y.length;
    x.unshift("");
    y.unshift("");
    //构造辅助空间
    let result = [];
    for (let i = 0; i <= xLen; i++) {
        result[i] = [];
        for (let j = 0; j <= yLen; j++) {
            result[i][j] = 0;
        }
    }
    for (let i = 1; i <= xLen; i++) {
        for (let j = 1; j <= yLen; j++) {
            log.push(`当前比较的元素为 ${x[i]}和${y[j]} ,`);
            if (x[i] == y[j]) {
                //当前比较的字符相等,为最优解贡献增加1
                result[i][j] = result[i - 1][j - 1] + 1;
                log.push(`值相等,为最优解贡献增加1,由${result[i - 1][j - 1]}变化为了${result[i][j]}`);
            } else if (result[i - 1][j] >= result[i][j - 1]) {
                // 字符不相等,取出两个子问题的最大贡献值,进入下一轮
                result[i][j] = result[i - 1][j];
                log.push(`值不相等,选择子问题result[${ i - 1}][${j}]的解作为新的解`);
            } else {
                result[i][j] = result[i][j - 1];
                log.push(`值不相等,选择子问题result[${ i  }][${j - 1}]的解作为新的解`);
            }
            log.push("\n")
        }
    }
    return {
        result, log, chain: printLCS(result, x, y, xLen, yLen)
    }
}
function makeArray (str) {
    var len = str.length,
        arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(str[i]);
    }
    return arr;
}
module.exports = function () {
    let x = ['A', 'B', 'C', 'B', 'D', 'A', 'B'];
    let y = ['B', 'D', 'C', 'A', 'B', 'A'];
    x = makeArray('10010101');
    y = makeArray('010110110');
    // x=makeArray('xzyzzyx');
    // y=makeArray('zxyyzxz');
    x=makeArray('MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCALLAAQANKESSSESFISRLLAIVAD');
    y=makeArray('MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCTLLAAQANKENSNESFISRLLAIVAG');
    return LCS(x, y);
};