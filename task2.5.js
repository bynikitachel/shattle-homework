// Американцы - странные люди: в их зданиях первый этаж - это нулевой этаж, и нет 13-го этажа (суеверия).
// Напишите функцию convertFloor(floor), которая получает американский этаж (передается как целое число), 
// и возвращает реальный.Кроме того, ваша функция должна работать и на подвальных этажах.

console.log('---------------------- Task 2.4 --------------------------');
let convertFloor = (floor) => {
    normFloor = 0;
    if (floor >= 0 && floor <= 12) {
        normFloor = floor + 1;
        console.log(normFloor);
    } else if (floor > 13 || floor < 0) {
        normFloor = floor;
        console.log(normFloor);
    } else if (floor === 13) {
        console.log('this floor absent in american elevator')
    }

}
convertFloor(13);