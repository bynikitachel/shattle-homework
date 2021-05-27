//************************ Task 4 ************************

// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт 15.
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

console.log('---------------------- Task 4 --------------------------');

let arr_calc = []
let sum = 0;

let i = 0;
do {
    const inputValue = prompt('Input numbers');
    if (inputValue === null) {
        console.log('you click cancel');
        console.log('Array with numbers', arr_calc);
        console.log('sum = ', sum);
        break;
    } else if (inputValue === '15') {
        console.log('15 is banned');
        console.log('Array with numbers', arr_calc);
        console.log('sum = ', sum);
        break;
    } else if (isNaN(inputValue)) {
        console.log('not number');
        console.log('Array with numbers', arr_calc);
        console.log('sum = ', sum);
        break;
    } else {
        arr_calc.push(inputValue)
        sum += +arr_calc[i];
    }
    i++;
}
while (true);