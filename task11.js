// В презентации 11(Дата и время), необходимо вычислить промежуток в милисекунда между двумя любыми датами.

let date1 = new Date('2017-01-26');
let date2 = new Date('2000-08-11');
let date3 = new Date();
date3 = date1 - date2;
console.log(date3);