// Создать объект Прямоугольник (rectangle) с параметрами высота (height) и ширина (width) 
// и методом getArea(), который возвращает площадь
// console.log(rectangle.width);       // => 10
// console.log(rectangle.height);      // => 20
// console.log(rectangle.getArea());   // => 200

let rectangle = {
    height: '',
    width: '',
    getArea: function(x, y) {
        rectangle.height = x;
        rectangle.width = y;
        return rectangle.height * rectangle.width;
    }
}
let result = rectangle.getArea(5, 8);
console.log(result);