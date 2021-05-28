// Перепишите функцию
// заменив if else на конструкцию switch (convertType1)
// через Function Expression (convertType2)
// с помощью стрелочного синтаксиса (convertType3)

console.log('---------------------- Task 2.6 --------------------------');

// function convertType(value, toType) {
//     if (toType === 'boolean') {
//         return Boolean(Value);
//     } else if (toType === 'string') {
//         return String(value);
//     } else if (toType === 'number') {
//         return Number(value);
//     }
// }
// console.log(convertType('my string', 'boolean'));

//1
function convertType1(value, toType) {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
    }
}
console.log(convertType1('my string', 'boolean'));

//2
let convertType2 = function(value, toType) {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
    }
}
console.log(convertType2('my string', 'string'));

//3
let convertType3 = (value, toType) => {
    switch (toType) {
        case 'boolean':
            return Boolean(value);
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
    }
}
console.log(convertType3('my string', 'number'));