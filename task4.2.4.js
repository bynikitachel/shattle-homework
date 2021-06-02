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
    arr.push(numbers[i]);
    // console.log(sum);
    let add = (x) => {
        if (i === 0) {
            sum = +x[0];
            arrr.push(sum);
            console.log('arrr=', arrr);
        } else {
            for (let j = 0; j < i - 1; j++) {
                console.log('arrr[j] =', arrr[j]);
                console.log('sum =', sum);
                sum += +arrr[j];
                console.log('sum =', sum);

            }
            sum += +x[i];
            arrr.push(sum);
            console.log('arrr=', arrr);
        }
        const li1 = document.createElement('li');
        li1.innerHTML = arrr[i];
        ul1.append(li1);
    }
    add(arr);
    i++;
}
// console.log(arrr);