// Ваша цель - создать функцию deleteChars(str), которая удаляет первый и последний символы строки, 
// которая передается в параметр, и возвращает новую строку без этих символов.

console.log('---------------------- Task 2.4 --------------------------');
let deleteChars = (str) => {
    str.split();
    let arrStr = [];
    for (i = 1; i < str.length - 1; i++) {
        arrStr.push(str[i])
    }
    console.log(arrStr)
    newArrStr = arrStr.join('');
    console.log(newArrStr)
}
deleteChars('Hello');