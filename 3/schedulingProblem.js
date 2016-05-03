/**
 * @description 调度任务算法,使得平均结束时间最小化
 * @param schedule 输入队列
 * @returns {{sort: string, time: number}}
 */
let sort = require('../sort/mergeSort');
function schedulingProblem (schedule) {
    sort(schedule);
    let _len = schedule.length;
    let sum = 0;
    for (let i = 0; i < _len; i++) {
        for (let j = 0; j <= i; j++) {
            sum += schedule[j];
        }
    }
    return {
        sort: schedule,
        time: sum / _len
    }
}
module.exports = schedulingProblem;