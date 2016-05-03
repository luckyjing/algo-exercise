let chai = require('chai');
let expect = chai.expect;
let knapsackProblem = require('./knapsackProblem');
let fs = require('fs');
let output = fs.createWriteStream('./test.log');
let Console = require('console').Console;
let logger = new Console(output);
const INFINITE = 10000;
describe('#knapsackProblem', ()=> {
    it('应该打印出最优结果', ()=> {
        let weight = [10, 20, 30, 40, 50];
        let value = [20, 30, 65, 40, 60];
        let knapsackWeight = 100;
        let str = knapsackProblem(value, weight, knapsackWeight);
        logger.log(str);
    });
    it("should equal with 220", ()=> {
        let weight = [10, 20, 30];
        let value = [60, 100, 120];
        let knapsackWeight = 50;
        expect(knapsackProblem(value, weight, knapsackWeight)).to.equal(220);
    })
});
describe('#schedulingProblem', ()=> {
    it('should be 5.5', ()=> {
        let schedule = require('./schedulingProblem');
        expect(schedule([5, 3])).to.deep.equal({
            sort: [3, 5],
            time: 5.5
        });
    })
});
describe('#singleSource', ()=> {
    let { singleSource, Graph } = require('./singleSource');
    let g = new Graph([
        [0, 6, INFINITE, 7, INFINITE],
        [INFINITE, 0, 5, 8, -4],
        [INFINITE, -2, 0, INFINITE, INFINITE],
        [INFINITE, INFINITE, -3, 0, 9],
        [2, INFINITE, 7, INFINITE, 0]
    ]);
    let g1 = new Graph([
        [INFINITE, -1, 3, INFINITE, INFINITE],
        [INFINITE, INFINITE, 3, 2, 2],
        [INFINITE, INFINITE, INFINITE, INFINITE, INFINITE],
        [INFINITE, 1, 5, INFINITE, INFINITE],
        [INFINITE, INFINITE, INFINITE, 3, INFINITE]
    ]);
    //false
    let g2 = new Graph([
        [0, 6, INFINITE, 7, INFINITE],
        [INFINITE, 0, 5, 8, -4],
        [INFINITE, -2, 0, INFINITE, INFINITE],
        [INFINITE, INFINITE, -3, 0, 9],
        [2, INFINITE, 4, INFINITE, 0]
    ]);
    g.initAlias(['s', 't', 'x', 'y', 'z']);
    it('test g.edge', ()=> {
        expect(g.edge.length).to.equal(10);
    });
    it('test should all return ture', ()=> {
        expect(singleSource(g)).to.ok;
        expect(singleSource(g1)).to.ok;
    });
    it('test should all return false', ()=> {
        expect(singleSource(g2)).to.not.ok;

    });
});
describe('#allSource', ()=> {
    let arr = [
        [0, 3, 8, INFINITE, -4],
        [INFINITE, 0, INFINITE, 1, 7],
        [INFINITE, 4, 0, INFINITE, INFINITE],
        [2, INFINITE, -5, 0, INFINITE],
        [INFINITE, INFINITE, INFINITE, 6, 0]
    ];
    let allSource = require('./allSource');
    let Graph = require('./graph');
    let g = new Graph(arr);
    allSource(g);
});