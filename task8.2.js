// 2)	Создать 2 области ввода(textarea) ввода с помощью JS и установить первому фокус. 
// Первое доступно для ввода, второе только для чтения. 
// При вводе в первую область ввода, дублировать введённые данные во вторую область ввода.

let form = document.createElement('form');
document.body.append(form);
let textarea1 = document.createElement('textarea');
let textarea2 = document.createElement('textarea');

textarea2.setAttribute('readOnly', true);
form.append(textarea1);
form.append(textarea2);
window.onload = function() {
    textarea1.focus();
}
textarea1.addEventListener('input', function() {
    textarea2.value = textarea1.value;
})