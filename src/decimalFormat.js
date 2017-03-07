/**
 * Created by duanguang on 2017/3/6.
 */
import invariant from 'invariant';

function numberFormatMoney(value){
    if(/-+[^0-9\.]/.test(value)) return "invalid value";
    value=value.toString().replace(/^(\d*)$/,"$1.");
    value=(value+"00").replace(/(\d*\.\d\d)\d*/,"$1");
    value=value.replace(".",",");
    var re=/(\d)(\d{3},)/;
    while(re.test(value))
        value=value.replace(re,"$1,$2");
    value=value.replace(/,(\d\d)$/,".$1");
    return "￥" + value.replace(/^\./,"0.");
}
function digitUppercase(num){
    var fraction = ['角', '分'];
    var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    var unit = [ ['元', '万', '亿'], ['', '拾', '佰', '仟']  ];
    var head = num < 0? '欠': '';
    num = Math.abs(num);

    var s = '';

    for (var i = 0; i < fraction.length; i++)
    {
        s += (digit[Math.floor(num * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }
    s = s || '整';
    num = Math.floor(num);

    for (var i = 0; i < unit[0].length && num > 0; i++)
    {
        var p = '';
        for (var j = 0; j < unit[1].length && num > 0; j++)
        {
            p = digit[num % 10] + unit[1][j] + p;
            num = Math.floor(num / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零')  + unit[0][i] + s;
    }
    return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

export function decimalFormat() {
    return{
        numberFormatMoney,
        digitUppercase
    }
}