//************************ Task 1 ************************

// Существует массив из какого-то количества элементов строковых данных. 
// Необходимо создать новый массив из длин каждого из элементов исходного массива.

console.log('---------------------- Task 1 --------------------------');

let arr_strings = ['1', '12', '123', '1234', '12345', 'soyuz nerushimiy respublik svobodnih', '7654321'];
let arr_lengths = [];

for (let i = 0; i < arr_strings.length; i++) {
    arr_lengths[i] = arr_strings[i].length;
}
console.log('Array with strings', arr_strings);
console.log('Array with length of strings', arr_lengths);