// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let obj = {};
let obj1 = { a: 0 };
let isEmpty = (x) => {
    for (let key in x) {
        return false;
    }
    return true;
}
let result = isEmpty(obj1);
console.log(result);