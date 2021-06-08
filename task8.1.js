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
let names = [];
button.addEventListener('click', function(event) {
    event.preventDefault();
    names.push(form.elements.formName.value + ',' + form.elements.formSurname.value);
    console.log('array of names', names)
    let del = document.createElement('button');
    del.innerHTML = 'Delete';
    del.classList = 'delete';
    del.type = 'button';
    // del.style.visibility = 'visible';
    if (document.querySelector('.delete')) {} else {
        // del.style.display = 'inline-block';
        form.append(del);
    }
    del.addEventListener('click', function() {
        // event.preventDefault();
        let neww;
        if (names.length > 0) {
            let lastName = names[names.length - 1].split(',');
            neww = names.splice(names.length - 1, 1);
            console.log('new array of names', names);
            form.elements.formName.value = lastName[0];
            form.elements.formSurname.value = lastName[1];
            console.log(lastName);
        } else {
            console.log('stop click Delete')
        }
        //тут я хотел скрыть кнопку, но потом снова ее показать уже не получается

        // if (names.length === 0) {
        //     console.log(names.length);
        //     del.style.display = 'none';
        //     del.style.visibility = 'hidden';
        // }
    })
    form.reset();
})