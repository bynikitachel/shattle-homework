// Есть массив [ ‘Tony’, ‘Stark’,  1 , 45, 2, 5, 34, 9, 11]
// Присвоить первое и второе значения массива к соответствующим переменным, а остальные значения сложить 

let arr = ['Tony', 'Stark', 1, 45, 2, 5, 34, 9, 11];
let obj = {};
let func = (x) => {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        obj.name = x[0];
        obj.surname = x[1];
        if (typeof x[i] === 'number') {
            sum += x[i];
        }
    }
    let { name, surname } = obj;
    console.log(name, surname);
    console.log(sum)
}
console.log(obj)
func(arr)