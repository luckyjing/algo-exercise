function knapsackProblem (value, weight, knapsackWeight) {
    let itemLen = value.length;
    let tmp = [];
    // 构造辅助空间tmp,tmp[i][j] 表示前i件物品里放入容量为j的背包里的最大价值
    for (let i = 0; i <= itemLen; i++) {
        // row
        tmp[i] = [];
        for (let j = 0; j <= knapsackWeight; j++) {
            tmp[i][j] = 0;
        }
    }
    for (let i = 1; i <= itemLen; i++) {
        for (let j = 1; j <= knapsackWeight; j++) {
            //从(1,1)开始计算
            if (weight[i - 1] <= j) {
                // 可以放得下当前物品
                tmp[i][j] = Math.max(tmp[i - 1][j], tmp[i - 1][j - weight[i - 1]] + value[i - 1]);
            } else {
                tmp[i][j] = tmp[i - 1][j];
            }
        }
    }
    return tmp[itemLen][knapsackWeight];
}
module.exports = knapsackProblem;