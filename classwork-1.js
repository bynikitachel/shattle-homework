console.log('---------------------- Task 1 --------------------------')
let arr = [];
let sum = 0;
let j = Math.floor(Math.random() * 10);
for (i = 0; i < 6; i++) {
    arr[i] = j + i * 5;
    sum += arr[i];
    if (i === 5) {
        console.log('array = ', arr);
        console.log('sum = ', sum);
    }
}



console.log('--------------------- Task 2-3 -------------------------')
arr = [];
let arr_len = 0;
arr_len = Math.floor(Math.random() * 10);
let last_element = 0;

if (arr_len === 0) {
    console.log('length of arr = ', arr_len);
    console.log('bad luck, try again))');
}

for (i = 0; i < arr_len; i++) {
    arr[i] = i + Math.floor(Math.random() * 100);

    if (i === arr_len - 1) {
        console.log('length of array = ', arr_len);
        console.log('array = ', arr);
        if (arr_len === 1) {
            console.log('length of array = ', arr_len);
            break;
        }
        last_element = arr[arr.length - 1]
        arr[arr.length - 2] = 'penultimate element'
        console.log('array after accession = ', arr);
        console.log('last element = ', last_element);
    }
}



console.log('---------------------- Task 4 --------------------------')
    //1
let styles = ['Jazz', 'Blues'];
console.log(styles);

//2
let added = styles.splice(2, 0, "Rock 'n' roll");
console.log(styles);

//3
l = styles.length;
let replacement = styles.splice(l - 2, 1, "Classic");
console.log(styles);

//4
let removed = styles.splice(0, 1);
console.log(styles);
alert(removed)

//5
new_added = styles.splice(0, 0, "Rap", "Reggy");
console.log(styles);