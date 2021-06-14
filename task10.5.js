// Создать объект Прямоугольник (rectangle) с параметрами высота (height) и ширина (width) 
// и методом getArea(), который возвращает площадь
// console.log(rectangle.width);       // => 10
// console.log(rectangle.height);      // => 20
// console.log(rectangle.getArea());   // => 200

let rectangle = {
    height: 5,
    width: 8,
    getArea: function() {
        return rectangle.height * rectangle.width;
    }
}
let result = rectangle.getArea();
console.log(result);