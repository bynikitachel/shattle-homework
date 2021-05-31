const button = document.createElement('button');
button.id = 'play';
button.style.height = '30px';
button.style.marginLeft = '50px';
button.innerHTML = 'input message';
document.body.append(button);


document.querySelector('#play').addEventListener('click', function() {
    input = prompt('input: text, color, margin-top, margin-left');
    newInput = input.split(', ');
    console.log(newInput);
    // let arg1 = newInput[0];
    // let arg2 = newInput[1];
    // let arg3 = newInput[2];
    // let arg4 = newInput[3];
    let arg1 = newInput[0];
    let arg2 = 'yellow';
    let arg3 = '100';
    let arg4 = '50';
    console.log(arg1);
    showMessage(arg1, arg2, arg3, arg4);
});


let showMessage = (text, background, marginTop, marginLeft) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.style.position = 'fixed';
    div.innerHTML = text;
    div.style.background = background;
    div.style.marginTop = marginTop + 'px';
    div.style.marginLeft = marginLeft + 'px';
    div.style.padding = '5px';
    let k = document.querySelectorAll('.message');
    let i = 0;
    while (i < k.length) {
        if (i === 0) {
            marginLeft = 50;
        } else if (marginLeft === k[i].marginLeft) {
            marginLeft += 25;
        }
    }
    document.body.append(div);

    if (k.length > 3) {
        let removed = document.querySelector('.message');
        removed.remove();
    }
}

//do you like what you see?, yellow, 100, 50