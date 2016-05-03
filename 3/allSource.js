/*
 * 如果k不是中间顶点,那么{1,k-1}里面肯定包括那条路径,而且它是最短的,同时也是相对于{1,k}里面最短的,因为k这里是无关紧要的
 * 
 * */
const INFINITE = 10000;
module.exports = allSource;
function allSource (graph) {
    let _len = graph.length;
    let D = [];
    let prev = [];
    D[0] = graph.martix;
    // init prev[0]
    prev[0] = graph.martix.map(function (row, i) {
        return row.map(function (col, j) {
            if (i == j || col == INFINITE) {
                return null;
            } else {
                return i;
            }
        });
    });
    for (let k = 1; k <= _len; k++) {
        // 维度逐渐增加,遍历每一个窗口
        D[k] = [];
        prev[k] = [];
        for (let i = 0; i < _len; i++) {
            D[k][i] = [];
            prev[k][i] = [];
            for (let j = 0; j < _len; j++) {
                let a = D[k - 1][i][j];
                let b = D[k - 1][i][k - 1] + D[k - 1][k - 1][j];
                D[k][i][j] = Math.min(a, b);
                if (a <= b) {
                    prev[k][i][j] = prev[k - 1][i][j];
                } else {
                    prev[k][i][j] = prev[k - 1][k - 1][j];
                }
            }
        }
    }
    printChain(graph, prev, 1, 4);
}
function printChain (graph, prev, from, to) {
    let res = prev.pop();
    let tmp = [];
    if (from == to) {
        return null;
    }
    let value = to;
    while (value != null) {
        tmp.unshift(value);
        value = res[from][value];
    }
    console.log(`从${from}到${to}的路径为:${tmp.join('->')}`);
}