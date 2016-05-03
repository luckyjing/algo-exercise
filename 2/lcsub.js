//最长公共子串
"use strict";
function printLCSub (result, x) {
    var max = 0, len = result.length - 1, end;
    for (let i = 1; i <= len; i++) {
        let _len = result[i].length - 1;
        for (let j = 1; j <= _len; j++) {
            if (result[i][j] >= max) {
                max = result[i][j];
                end = i;
            }
        }
    }
    var tmp = [];
    for (let i = max-1; i >=0; i--) {
        tmp.push(x[end-i]);
    } 
    return tmp.join("");
}
function LCSub (x, y) {
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
            if (x[i] == y[j]) {
                //当前比较的字符相等,并且前面紧挨的也相等,则为最优解贡献增加1
                if (x[i - 1] == y[j - 1]) {
                    result[i][j] = result[i - 1][j - 1] + 1;
                } else {
                    result[i][j] = 1;
                }
            } else {
                result[i][j] = 0;
            }
        }
    }
    return {
        result, log, chain: printLCSub(result, x)
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
let x = ['A', 'B', 'C', 'B', 'D', 'A', 'B'];
let y = ['B', 'D', 'C', 'A', 'B', 'A'];
x = makeArray('10010101');
y = makeArray('010110110');
// x=makeArray('xzyzzyx');
// y=makeArray('zxyyzxz');
x = makeArray('MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCALLAAQANKESSSESFISRLLAIVAD');
y = makeArray('MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCTLLAAQANKENSNESFISRLLAIVAG');
module.exports = LCSub;