// Напишите функцию pow(x,n), которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

console.log('---------------------- Task 2.2 --------------------------');
let pow = (x, n) => {
    let result = x;
    if (Number.isInteger(n) && n >= 1) {
        for (i = 0; i < n - 1; i++) {
            result *= x;
        }
        return result;
    } else {
        return 'n not integer or less than 1';
    }
}
let powNum = pow(3, 6);
console.log(powNum);