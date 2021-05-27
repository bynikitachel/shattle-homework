document.write('task 1');

const div = document.createElement("div");
document.body.append(div);
div.style.background = 'red';
div.innerHTML = 'Text for div';

let changesDiv = (bkgd, cs) => {
    div.style.background = bkgd;
    for (i = 0; i < 2; i++) {
        div.classList.add(cs + i);
    }

}
changesDiv('blue', 'class');