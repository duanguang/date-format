/**
 * Created by duanguang on 2017/3/2.
 */
/*import {timeagoFormat,formatDate,parseDate,formatDateToFriendly,formatDurationToFriendly,formatTimeToFriendly,getMonthDays,countDays} from '../lib/index';*/
import {DateFormat} from '../lib/index';
describe('test1', () => {
    it('timeagoFormat', () => {
       var s=DateFormat.timeagoFormat('2016-06-10 12:12:00','2016-06-10 12:14:12');
        console.log(s);
    });

    it('formatDate', () => {
        console.log(DateFormat.formatDate());
        console.log(DateFormat.formatDate(new Date(), 'yyyy-MM-dd'));
        console.log(DateFormat.formatDate(new Date(),'yyyy-MM-dd 第q季度 ww HH:mm:ss:SSS'));
        console.log(DateFormat.formatDate(1472793615764));
    });

    it('parseDate', () => {
        console.log(DateFormat.parseDate('2016-08-11'));
        console.log(DateFormat.parseDate('2016-08-11 13:28:43', 'yyyy-MM-dd HH:mm:ss'));
    });

    it('formatDateToFriendly', () => {
        console.log(DateFormat.formatDateToFriendly(new Date()));
    });

    it('formatDurationToFriendly', () => {
        console.log(DateFormat.formatDurationToFriendly(168));
    });

    it('formatTimeToFriendly', () => {
        console.log(DateFormat.formatTimeToFriendly(168));
    });

    it('getMonthDays', () => {
        console.log(DateFormat.getMonthDays());
        console.log(DateFormat.getMonthDays(new Date()));
        console.log(DateFormat.getMonthDays(2013, 2));
    });

    it('countDays', () => {
        console.log(DateFormat.countDays('2017-03-02','2017-01-28'));
    });
});