// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
// Пример вызовов: min(2, 5)min(3, -1) min(1, 1) 

console.log('---------------------- Task 2.1 --------------------------');
let min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
let minNum = min(6, 5);
console.log(minNum);