"use strict";
var chai = require('chai');
var expect = chai.expect;
var maxSum = require('./maxSum');
var lcsub = require('./lcsub');
var maxtrixChain = require('./maxtrixChain');
function makeArray (str) {
    var len = str.length,
        arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(str[i]);
    }
    return arr;
}


describe('#maxSum', ()=> {
    it('返回的值应该为14 1 4', ()=> {
        let arr = [6, -1, 5, 4, -7];
        expect(maxSum(arr)).to.equal("14 1 4");
    });
    it('返回的值应该为7 1 6', ()=> {
        let arr = [0, 6, -1, 1, -6, 7, -5];
        expect(maxSum(arr)).to.equal("7 1 6");
    });
    it('返回的值应该为20 2 4', ()=> {
        let arr = [-2, 11, -4, 13, -5, -2];
        expect(maxSum(arr)).to.equal("20 2 4");
    });
    it('返回的值应该为0 1 5', ()=> {
        let arr = [0, 0, 0, 0, 0];
        expect(maxSum(arr)).to.equal("0 1 5");
    })
});
describe('#lcsub', ()=> {
    it("ACEC和AEC的最长子串为EC", ()=> {
        let arr = makeArray('AEC');
        let arr1 = makeArray('ACEC');
        expect(lcsub(arr, arr1).chain).to.equal("EC");
    });
    it('返回的最长公共子串应该为21232', ()=> {
        let arr = makeArray('21232523311324');
        let arr1 = makeArray('312123223445');
        expect(lcsub(arr, arr1).chain).to.equal("21232");
    });

    let x = makeArray('xzyzzyx'),
        y = makeArray('zxyyzxz');
    console.log(lcsub(x, y).chain);
    x = makeArray('MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCALLAAQANKESSSESFISRLLAIVAD');
    y = makeArray('MAEEEVAKLEKHLMLLRQEYVKLQKKLAETEKRCTLLAAQANKENSNESFISRLLAIVAG');
    console.log(lcsub(x, y).chain);
});
describe('#maxtrixChain', ()=> {
    it('should return true', ()=> {
        let arr = [3, 5, 2, 1, 10];
        console.log(maxtrixChain(arr));
        arr = [2, 7, 3, 6, 10];
        console.log(maxtrixChain(arr));
        arr = [10, 3, 15, 12, 7, 2];
        console.log(maxtrixChain(arr));
        arr = [7, 2, 4, 15, 20, 5];
        console.log(maxtrixChain(arr));
    })
});