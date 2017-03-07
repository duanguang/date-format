/**
 * Created by duanguang on 2017/3/2.
 */
/*import {timeagoFormat,formatDate,parseDate,formatDateToFriendly,formatDurationToFriendly,formatTimeToFriendly,getMonthDays,countDays} from '../lib/index';*/
import {dateFormat,numberFormat,decimalFormat} from '../lib/index';
describe('test1', () => {
    it('timeagoFormat', () => {
       var s=dateFormat.timeagoFormat('2016-06-10 12:12:00','2016-06-10 12:14:12');
        console.log(s);
    });

    it('formatDate', () => {
        console.log(dateFormat.formatDate());
        console.log(dateFormat.formatDate(new Date(), 'yyyy-MM-dd'));
        console.log(dateFormat.formatDate(new Date(),'yyyy-MM-dd 第q季度 ww HH:mm:ss:SSS'));
        console.log(dateFormat.formatDate(1472793615764));
    });

    it('parseDate', () => {
        console.log(dateFormat.parseDate('2016-08-11'));
        console.log(dateFormat.parseDate('2016-08-11 13:28:43', 'yyyy-MM-dd HH:mm:ss'));
    });

    it('formatDateToFriendly', () => {
        console.log(dateFormat.formatDateToFriendly(new Date()));
    });

    it('formatDurationToFriendly', () => {
        console.log(dateFormat.formatDurationToFriendly(168));
    });

    it('formatTimeToFriendly', () => {
        console.log(dateFormat.formatTimeToFriendly(168));
    });

    it('getMonthDays', () => {
        console.log(dateFormat.getMonthDays());
        console.log(dateFormat.getMonthDays(new Date()));
        console.log(dateFormat.getMonthDays(2013, 2));
    });

    it('countDays', () => {
        console.log(dateFormat.countDays('2017-03-02','2017-01-28'));
    });
    it('miliFormat', () => {
        console.log(numberFormat.miliFormat(2000000.88));
    });

    it('numberFormatMoney', () => {
        console.log(decimalFormat.numberFormatMoney(2000000.888));
    });

    it('digitUppercase', () => {
        console.log(decimalFormat.digitUppercase(20.88));
    });

});