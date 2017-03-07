/**
 * Created by duanguang on 2017/3/6.
 */
import invariant from 'invariant';

function toFixed(number,point) {
    invariant(number, `number can not be null`);
    if(typeof number==='number'){
        point=point&&typeof point==='number'?point:2;
        return number.toFixed(point);
    }
    else {
        console.error('参数格式无效！');
        return 0;
    }
}
/**
* 千位格式化
* @param num
* @returns {*}
*/
function miliFormat(num){
    invariant(num, `num can not be null`);
    if(typeof num==='number'){
        var regex=/^[\d]+$/;
        if(regex.test(num)){
            return num && num.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',')
        }
        else {
            return num && num
                    .toString()
                    .replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
                        return $1 + ",";
                    });
        }
    }
    else {
        console.error('参数格式无效！');
        return 0;
    }
}

export function numberFormat() {
    return{
        toFixed,
        miliFormat
    }
}