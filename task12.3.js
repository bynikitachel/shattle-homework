// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

let printNumbers = (from, to) => {
    let value = from;
    let timer = setInterval(function() {
        console.log(value);
        if (value === to) {
            clearInterval(timer)
        }
        value++;
    }, 1000);
}
printNumbers(0, 5)