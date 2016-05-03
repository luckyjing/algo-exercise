const INFINITE = 10000;
class Graph {
    constructor (arr) {
        let ctx = this;
        ctx.martix = arr;
        ctx.length = arr.length;
        ctx.v = arr.map(function (item, index) {
            return {
                index
            }
        });
        ctx.edge = [];
        arr.forEach(function (row, i) {
            row.forEach(function (col, j) {
                if (col != INFINITE && i != j) {
                    ctx.edge.push({
                        from: i,
                        to: j,
                        w: col
                    })
                }
            })
        });
        this.alias = false;
    }

    initAlias (arr) {
        let ctx = this;
        ctx.alias = true;
        ctx.v.forEach(function (vv, index) {
            vv.name = arr[index];
        })
    }

    getEdge () {
        let ctx = this;
        if (ctx.alias) {
            let out = ctx.edge.map(function (e) {
                return {
                    from: ctx.v[e.from].name,
                    to: ctx.v[e.to].name,
                    w: e.w
                }
            });
            return out;
        } else {
            return ctx.edge;
        }
    }
}
module.exports = Graph;