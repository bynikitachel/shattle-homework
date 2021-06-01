let button = document.createElement('button');
button.innerHTML = 'hide';
document.body.append(button);
button.addEventListener('click', function() {
    button.style.display = 'none';
})

let a = document.createElement('a');
a.href = 'https://rt.pornhub.com/';
a.innerHTML = 'тебе сюда нельзя';
document.body.append(a);
a.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Переход по умолчанию отменён');
})

let buttonClone = document.createElement('button');
buttonClone.innerHTML = 'clone';
document.body.append(buttonClone);
let input = document.createElement('input');
input.id = 'clone';
document.body.append(input);
buttonClone.addEventListener('click', function() {
    let inputs = document.querySelector('#clone');
    console.log(inputs);
    let clone = inputs.cloneNode(true);
    document.body.append(clone);
})

let img1 = document.createElement('img');
img1.src = './img/cat.jpg';
img1.classList = 'img';
document.body.append(img1);
let img2 = document.createElement('img');
img2.src = './img/red.jpg';
img2.classList = 'img';
document.body.append(img2);
let img3 = document.createElement('img');
img3.src = './img/catbrutal.jpg';
img3.classList = 'img';
document.body.append(img3);

let arr = document.querySelectorAll('.img');
console.log(arr)
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    arr[i].addEventListener('click', function(e) {
        console.log(e.target.getAttribute('src'));
    })
}