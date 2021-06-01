const ul1 = document.createElement('ul');
document.body.append(ul1);

let numbers = [];
let i = 0;
let arr = [];
let arrr = [];
let arrrr = [];
let sum = 0;
while (i < 5) {
    numbers[i] = prompt('Input number');
    // numbers[i] = +numbers[i];
    // if (i === 0) {
    //     arrr.push(numbers[0])
    // } else {
    //     arr += numbers[i];
    //     arrr.push(arr + numbers[i - 1])
    // }
    arr.push(numbers[i]);
    console.log(arr);

    let add = (x) => {


        // x = +x;
        // arr += x;
        for (j = 0; j < x.length; j++) {
            if (j === 0) {
                sum += +x[i]
                arrr.push(sum)
            } else {
                sum += +x[i] + +x[i - j];
                arrr.push(sum)

            }

        }
        console.log(arrr);
        // const li1 = document.createElement('li');
        // li1.innerHTML = arr;
        // ul1.append(li1);
    }
    add(arr);
    i++;
}
console.log(arrr);
console.log(arr);