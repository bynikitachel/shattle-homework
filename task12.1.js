// Напишите функцию printMessage(n), которая выводит сообщения на экран каждые n секунд.

let printMessage = (n) => {
    setInterval(() => console.log('Прошла ' + n + ' секунда'), n);
}
printMessage(1);