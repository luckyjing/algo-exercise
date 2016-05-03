"use strict";

function knapsackProblem (value, weight, knapsackWeight) {
    class Node {
        constructor (value, weight, knapsackWeight) {
            this.nodes = value.map(function (v, index) {
                return {
                    value: v,
                    weight: weight[index],
                    leftChosen: false,
                    rightChosen: false
                }
            });
            this.answer = [];
            this.bestPrice = 0;
            this.ba = 0;
            this.stack = [];
            this.kw = knapsackWeight;
            this.cw = 0;
            this.cp = 0;
            let average = value.map(function (v, index) {
                return v / weight[index];
            });
            this.average = average.sort(()=> {
                return true
            });
        }

        canChoose (index) {
            let r = this.nodes.slice(index);
            let sum = 0;
            for(let i=0;i<r.length;i++){
                sum+=r[i].value;
            }
            return this.nodes[index].weight + this.cw <= this.kw && sum + this.cp >= this.bestPrice;
        }

        choose (index) {
            this.cw += this.nodes[index].weight;
            this.cp += this.nodes[index].value;
            this.stack.push(1);
            this.nodes[index].leftChosen = true;
        }

        rightCanChoose (index) {
            let b = this.cp;
            let i = index + 1;
            for (; i < n; i++) {
                let c = this.nodes[i].weight + this.cw;
                if (c <= this.kw) {
                    b += this.nodes[i].value;
                } else {
                    b += ( ((this.kw - this.cw) / this.nodes[i].weight ) * this.nodes[i].value);
                }
            }
            return b > this.ba;
        }

        chooseRight (index) {
            this.stack.push(0);
            this.nodes[index].rightChosen = true;
        }

        left (index) {
            this.nodes[index].rightChosen = false;
            this.nodes[index].leftChosen = false;
            this.stack.pop();
            this.cp = 0;
            this.cw = 0;
            this.stack.forEach((item, index)=> {
                if (item) {
                    this.cw += this.nodes[index].weight;
                    this.cp += this.nodes[index].value;
                }
            });
        }

        storeAnswer () {
            this.bestPrice = this.cp;
            this.answer = this.stack.slice(0);
            // console.log('找到了解!!!!',this.bestPrice);
        }

        isAlive (index) {
            console.log(index);
            return !this.nodes[index].leftChosen || !this.nodes[index].rightChosen;
        }

        result () {
            console.log(this.bestPrice);
            console.log(this.answer);
        }
    }
    let node = new Node(value, weight, knapsackWeight);
    let n = value.length;
    let index = 0;
    while (node.isAlive(0) || node.stack.length != 0) {
        // console.log(node.stack);
        if (node.isAlive(index) && node.canChoose(index)) {
            // 如果当前物品可以放下,并且是第一次选择,那么便选择它
            if (!node.nodes[index].leftChosen) {
                // console.log('选择了拿,入栈1');
                node.choose(index);
                if (index == n - 1) {
                    // 找到一个解,到达叶子节点,直接放回上一层
                    node.storeAnswer();
                    node.stack.pop();
                    node.left(index);
                    index--;
                } else {
                    index++;
                }
            } else if (!node.nodes[index].rightChosen) {
                // 观察其右子树
                if (node.rightCanChoose(index)) {
                    // 可以放下则进行选择
                    // console.log('选择了不拿,出栈0');
                    node.chooseRight(index);
                    index++;
                } else {
                    // 放不下,则剪掉
                    node.left(index);
                }
            }
        } else {
            //当前节点不可以被选择,直接抛弃掉,此时没有入栈,返回上一层
            node.left(index);
            index--;
        }
    }
    node.result();
}
module.exports = knapsackProblem;
let weight = [10, 20, 30, 40, 50];
let value = [20, 30, 65, 40, 60];
let knapsackWeight = 100;
knapsackProblem(value, weight, knapsackWeight);