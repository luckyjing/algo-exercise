/**
 * Created by luckyjing on 16/3/29.
 */
var quickSort = require('../排序/quickSort');
function hasSame(arr) {
    var tmp = {};
    for (var item of arr) {
        if (!tmp[item]) {
            tmp[item] = 1;
        } else {
            return item;
        }
    }
}
function excludeSame(arr, total) {
    var tmp = {}, result = undefined;
    var tmpArr = arr.filter(item=> {
        if (!tmp[item]) {
            tmp[item] = 1;
            return true;
        } else {
            if (item * item == total) {
                result = item;
            }
            return false;
        }
    });
    if (result != undefined) {
        return {
            flag: true,
            data: result
        };
    } else {
        return {
            flag: false,
            data: tmpArr
        };
    }
}
function isExistPlusX(arr, total) {
    quickSort(arr);
    var r1 = excludeSame(arr, total);
    if (r1.flag == false) {
        var tmp = arr.map(item=> {
            return total - item;
        });
        tmp = tmp.concat(arr);
        let result = hasSame(tmp);
        if (result != null) {
            return {
                flag: true,
                data: result
            };
        } else {
            return {
                flag: false
            };
        }
    } else {
        return {
            flag: true,
            data: r1.data
        };
    }
}
module.exports = {
    hasSame, excludeSame, isExistPlusX
};