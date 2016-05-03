function nQueen (n) {
    let placeArray = [];
    for (let i = 0; i < n; i++) {
        placeArray[i] = 0;
    }
    let cache = [];

    function initCache (state) {
        for (let i = state; i < n; i++) {
            cache[i] = -1;
        }
    }

    initCache(0);
    let nowState = 0; //表示目前进行的深度
    let result = [];
    function findPositionPlace (state) {
        let start;
        // if (placeArray[state]) {
        //     // 从当前值的下一个开始去搜寻
        //     start = ++placeArray[state];
        // }
        start = ++cache[state];
        for (let i = start; i < n; i++) {
            let flag = true;
            for (let j = 0; j < state; j++) {
                if (i == placeArray[j] || Math.abs(state - j) == Math.abs(i - placeArray[j])) {
                    flag = false;
                    // console.log(`本次位置:(${state},${i})${Math.abs(state - i)}  上一层位置: (${j},${placeArray[j]})${Math.abs(j - placeArray[j])}  `);
                    break;
                }
            }
            if (flag) {
                placeArray[state] = i;
                cache[state] = i;
                return i;
            }
        }
        // 没有找到合适位置,需要删除当前状态
        placeArray[state] = 0;
        initCache(state);
        return n;
    }

    let nextPlace = 0;
    while (nowState >= 0) {
        nextPlace = findPositionPlace(nowState);
        if (nextPlace < n) {
            //说明找到了位置
            // console.log(`当前状态为:${nowState},找到了位置:${nextPlace}`);
            if (nowState != n - 1) {
                nowState++;
            } else {
                //找到解
                result.push(placeArray.slice(0));
                nowState--;
                nextPlace = 0;
                // console.log(`发现解,回溯至上一层,继续搜索`);
            }
        } else {
            // 没找到位置,back
            // console.log(`当前状态为:${nowState},没找到了位置,回溯至状态${nowState - 1}`);
            nowState--;
        }
        // console.log(`当前的placeArray为:${placeArray.join('->')}`);
        // console.log('----------------------------------')
    }
    console.log(result)
}
nQueen(8);