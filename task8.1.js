// 1)	Создать форму с двумя полями (имя, фамилия), кнопкой и пустой список в js. 
// На событие submit добавлять в список введённое Имя и Фамилия и кнопку с крестиком,
// по которой этот элемент списка будет удалятся и так же поля будут очищаться.
// * При удалении записывать удаляемое Имя и Фамилию обратно в поля ввода.

let form = document.createElement('form');
document.body.append(form);
let formName = document.createElement('input');
let formSurname = document.createElement('input');
formName.name = 'formName';
formSurname.name = 'formSurname';
form.append(formName);
form.append(formSurname);
let button = document.createElement('button');
button.innerHTML = 'Submit';
form.append(button);
let ol = document.createElement('ol');
form.append(ol);
let names = [];
button.addEventListener('click', function(event) {
    event.preventDefault();
    names.push(form.elements.formName.value + ',' + form.elements.formSurname.value);
    let li = document.createElement('li');
    li.display = 'block';
    let del = document.createElement('button');
    del.innerHTML = 'Delete';
    del.classList = 'delete';
    del.type = 'button';
    let removed;
    for (let i = 0; i < names.length; i++) {
        li.innerHTML = names[i];
        li.classList = 'class' + i;
        removed = i;
        ol.append(li);
        li.append(del);
    }
    // debugger
    del.addEventListener('click', function() {
        // event.preventDefault();
        let liDel = document.querySelector('.class' + removed);
        liDel.remove();
        let lastName = names[removed].split(',');
        console.log('new array of names', names);
        form.elements.formName.value = lastName[0];
        form.elements.formSurname.value = lastName[1];
        console.log(lastName);
    })
    console.log('array of names', names)
    form.reset();
})