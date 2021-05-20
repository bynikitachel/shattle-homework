//************************ Task 3 ************************

// Существует массив  [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21] . 
// Необходимо создать новый массив из значений данного, которые больше 10.

console.log('---------------------- Task 3 --------------------------');

let arr_numbers = [1, 4, 2, 67, 34, 2, 50, 23, 11, 10, 5, 4, 9, 21];
let arr_10 = [];

//1 way
// for (i = 0; i < arr_numbers.length; i++) {
//     if (arr_numbers[i] > 10) {
//         arr_10.push(arr_numbers[i])
//     }
// }

//2 way
arr_10 = arr_numbers.filter(function (item, i, arr_numbers) {
    return arr_numbers[i] > 10;
})
console.log('numbers', arr_numbers);
console.log('numbers > 10', arr_10);