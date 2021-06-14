// Есть массив [ ‘Tony’, ‘Stark’,  1 , 45, 2, 5, 34, 9, 11]
// Присвоить первое и второе значения массива к соответствующим переменным, а остальные значения сложить 

let func = (first, second, ...numbers) => {
    let [name, surname] = [first, second];
    console.log(name, surname);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum)
}
func('Tony', 'Stark', 1, 45, 2, 5, 34, 9, 11);