"use strict";

function maxtrixChain (arr) {
    let _len = arr.length - 1;
    let result = [];
    let s = [];
    //init
    for (let i = 0; i <= _len; i++) {
        result[i] = [];
        s[i] = [];
        for (let j = _len; j >= i; j--) {
            result[i][j] = 0;
            s[i][j] = 0;
        }
    }
    for (let len = 2; len <= _len; len++) {
        for (let start = 1; start <= _len - len + 1; start++) {
            let end = start + len - 1, tmp;
            for (let k = start; k <= end - 1; k++) {
                tmp = result[start][k] + result[k + 1][end] + arr[start - 1] * arr[k] * arr[end];
                if (k == start) {
                    result[start][end] = tmp;
                    s[start][end] = k;
                } else {
                    if (tmp < result[start][end]) {
                        result[start][end] = tmp;
                        s[start][end] = k;
                    }
                }
            }
        }
    }
    return result;
}
module.exports = maxtrixChain;