'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.numberFormat = numberFormat;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toFixed(number, point) {
    (0, _invariant2.default)(number, 'number can not be null');
    if (typeof number === 'number') {
        point = point && typeof point === 'number' ? point : 2;
        return number.toFixed(point);
    } else {
        console.error('参数格式无效！');
        return 0;
    }
}
/**
* 千位格式化
* @param num
* @returns {*}
*/
/**
 * Created by duanguang on 2017/3/6.
 */
function miliFormat(num) {
    (0, _invariant2.default)(num, 'num can not be null');
    if (typeof num === 'number') {
        var regex = /^[\d]+$/;
        if (regex.test(num)) {
            return num && num.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',');
        } else {
            return num && num.toString().replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
                return $1 + ",";
            });
        }
    } else {
        console.error('参数格式无效！');
        return 0;
    }
}

function numberFormat() {
    return {
        toFixed: toFixed,
        miliFormat: miliFormat
    };
}