// По нажатию на кнопку показывать сообщение через 5 секунд, 
// во время этих 5 секунд должно появляться слово “loading”, а после появления сообщения - скрываться

let button = document.createElement('button');
button.innerHTML = 'start';
document.body.append(button);
button.addEventListener('click', function() {
    let div = document.createElement('div');
    div.innerHTML = 'loading...';
    document.body.append(div);
    let message = document.createElement('div');
    message.innerHTML = 'message';
    let timer = setTimeout(function() {
        document.body.append(message)
        div.remove();
    }, 5000);
});