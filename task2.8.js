// Нужно написать функцию, в которую  мы передаем число, суммируем цифры данного числа до тех пор,  
// пока не останется одна цифра

console.log('---------------------- Task 2.8 --------------------------');
let digitalRoot = (num) => {
    let arrNums = num.split('');
    let sum = 0;
    for (i = 0; i < arrNums.length; i++) {
        sum += +arrNums[i];
    }
    console.log(sum)

    const result = String(sum);

    arrNums = []

    if (result.length > 1) {
        return digitalRoot(result);
    } else {
        console.log(result)
    }
}
digitalRoot('9999999');