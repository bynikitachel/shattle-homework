//************************ Task 2 ************************

// Существует цикл for,  который перебирает массив со строковыми и числовыми  данными
// [“Anna”, 12, “Sam”, 9,  “Kate”, 10, “Ron”, 9] и выводит сначала строки, а затем числа:
// for (let i = 0; i < arr_strings.length; i++) {
//     if (typeof arr[i] === 'string') {
//         console.log((arr[i]) + ' - string value');
//     } else {
//         console.log(arr[i] + ' - number value');
//     }
// }
// Необходимо переписать данный цикл с помощью forEach() метода

console.log('---------------------- Task 2 --------------------------');

let arr_strings_2 = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9];

arr_strings_2.forEach(function (item) {
    if (typeof item === 'string') {
        console.log(item + ' - string value');
    } else {
        console.log(item + ' - number value');
    }
})