// Напишите функцию isEven(n), которая принимает один параметр, число, и возвращает, четное ли оно.
// То есть функция может возвращать два значения: четное или нечетное.

console.log('---------------------- Task 2.3 --------------------------');
let isEven = (n) => {
    if (n % 2 === 1) {
        return false;
    } else {
        return true;
    }
}
let output = (x, func) => {
    let outPutin = func(x);
    console.log(outPutin);
}
output(3, isEven)