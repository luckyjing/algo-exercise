let Graph = require('./graph');
const INFINITE = 10000;
function relaxInit (graph, source) {
    graph.v.forEach(function (v) {
        v.d = INFINITE;
        v.prev = null;
    });
    graph.v[source].d = 0;
}
function relax (graph, edge) {
    let s = graph.v[edge.from];
    let e = graph.v[edge.to];
    let w = edge.w;
    if (e.d > s.d + w) {
        e.d = s.d + w;
        e.prev = s.index;
    }
}
function singleSource (graph) {
    relaxInit(graph, 0);
    let steps = graph.length - 1;
    while (steps--) {
        graph.edge.forEach(function (e) {
            relax(graph, e)
        });
    }
    // 检查有效性
    let flag = true;
    graph.edge.forEach( ed => {
        let s = graph.v[ed.from];
        let e = graph.v[ed.to];
        let w = ed.w;
        if (e.d > s.d + w) {
            return flag = false;
        }
    });
    return flag;
}
module.exports = {
    singleSource,
    Graph
};

let g = new Graph([
    [0, 6, INFINITE, 7, INFINITE],
    [INFINITE, 0, 5, 8, -4],
    [INFINITE, -2, 0, INFINITE, INFINITE],
    [INFINITE, INFINITE, -3, 0, 9],
    [2, INFINITE, 7, INFINITE, 0]
]);
g.initAlias(['s', 't', 'x', 'y', 'z']);
singleSource(g);
// console.log(g.edge)