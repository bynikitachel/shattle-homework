// Создать объект circle со свойствами: radius, color. 
// Также создать в объекте метод   calculateCircumference(), 
// при вызове которого, в консоль выводится длина окружности (2 * число пи * радиус).

let circle = {
    radius: 2,
    color: 'red',
    calculateCircumference: function(x) {
        return x.radius * 2 * 3.14;
    }
}
let result = circle.calculateCircumference(circle);
console.log(result);