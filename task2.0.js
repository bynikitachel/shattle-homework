// Лизе нужно написать функцию sayHello(name), которая возвращает приветствие для пользователя. 
// Тем не менее, она влюблена в пользователя с именем “Mark”, и хотела бы поприветствовать его немного иначе.
// Помогите ей). Пример вызовов:
// sayHello(“Oleg”); // Hello, Oleg!
// sayHello(“Viktor”); // Hello, Viktor!
// sayHello(“Mark”); // Hi, Mark!

console.log('---------------------- Task 2.0 --------------------------');
let sayHello = (name) => {
    if (name === 'Mark') {
        console.log("Hello, my", name, '!');
    } else {
        console.log("Hello,", name, '!');
    }
}
sayHello('Mark');