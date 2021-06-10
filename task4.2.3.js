const button = document.createElement('button');
button.id = 'play';
button.style.height = '30px';
button.style.marginLeft = '50px';
button.innerHTML = 'input message';
document.body.append(button);


document.querySelector('#play').addEventListener('click', function() {
    input = prompt('input: text, color, margin-top, margin-left');
    newInput = input.split(', ');
    // console.log(newInput);
    // let arg1 = newInput[0];
    // let arg2 = newInput[1];
    // let arg3 = newInput[2];
    // let arg4 = newInput[3];
    let arg1 = newInput[0];
    let arg2 = 'yellow';
    let arg3 = 100;
    let arg4 = 50;
    // console.log(arg1);
    showMessage(arg1, arg2, arg3, arg4);
});

let showMessage = (text, background, marginTop, marginLeft) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.style.position = 'fixed';
    div.innerHTML = text;
    div.style.background = background;
    div.style.padding = '5px';
    let arrMess = document.querySelectorAll('.message');

    // debugger;
    for (let i = 0; i < arrMess.length; i++) {
        let mTop = parseInt(arrMess[i].style.marginTop);
        let mLeft = parseInt(arrMess[i].style.marginLeft);
        if (mTop === marginTop && mLeft === marginLeft) {
            marginTop += 25;
            marginLeft += 25;
        }

    }
    div.style.marginTop = marginTop + 'px';
    div.style.marginLeft = marginLeft + 'px';
    document.body.append(div);
    if (arrMess.length > 2) {
        let removed = document.querySelector('.message');
        removed.remove();
    }
}

//do you like what you see?, yellow, 100, 50