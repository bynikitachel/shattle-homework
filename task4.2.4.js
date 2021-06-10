const ul1 = document.createElement('ul');
document.body.append(ul1);


let arr = [];

while (true) {
    let number = +prompt('Input number');
    if (!number) {
        break;
    }
    arr.push(number);
    let items = document.querySelectorAll('li');
    let sum = number;
    for (let i = 0; i < items.length; i++) {
        sum += +items[i].innerHTML;
    }
    let li = document.createElement('li');
    li.innerHTML = sum;
    ul1.append(li);
}