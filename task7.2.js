let buttonAdd = document.createElement('button');
buttonAdd.innerHTML = 'add';
buttonAdd.class = 'add';
document.body.append(buttonAdd);
let arr = [];
buttonAdd.addEventListener('click', function() {
    let div = document.createElement('div');
    div.innerHTML = 'simple text';
    div.classList = 'd';
    document.body.append(div);
    arr.push(div);
});
console.log(buttonAdd)


let buttonDelete = document.createElement('button');
buttonDelete.innerHTML = 'delete';
buttonDelete.class = 'delete';
document.body.append(buttonDelete);
buttonDelete.addEventListener('click', function(x) {
    // document.body.lastChild.remove();
    let removed = document.querySelectorAll('.d');
    removed[removed.length - 1].remove();

});