# type-format-utils
一个简单时间，日期工具库，使用它可以很轻松格式化日期，时间以及获取"N"年，月，日，时，分，秒前后,还有日期，字符串互转，日期天数差等
# 1. Usage

npm install type-format-utils --save
or
yarn add  type-format-utils

# 2.Such as
import {dateFormat} from 'type-format-utils';

dateFormat.timeagoFormat('2016-06-10 12:12:00','2016-06-10 12:14:12');//2分钟前

dateFormat.formatDate(new Date(), 'yyyy-MM-dd')//2017-xx-xx

dateFormat.formatDate(new Date(),'yyyy-MM-dd 第q季度 ww HH:mm:ss:SSS')//2017-03-07 第1季度 周二 21:49:33:208

# 3. License
MIT

