let buttonAdd = document.createElement('button');
buttonAdd.innerHTML = 'add';
buttonAdd.class = 'add';
document.body.append(buttonAdd);
buttonAdd.addEventListener('click', function() {
    let div = document.createElement('div');
    div.innerHTML = 'simple text';
    document.body.append(div);
    let arr = [];
    arr.push(div);
});

let buttonDelete = document.createElement('button');
buttonDelete.innerHTML = 'delete';
buttonDelete.class = 'delete';
document.body.append(buttonDelete);
buttonDelete.addEventListener('click', function() {
    document.body.lastChild.remove();
});