// Создать объект message с полем text и методами: getMessage(string), showMessage(). 
// При вызове метода getMessage в поле text записывается переданная в качестве аргумента строка. 
// При вызове метода showMessage() вызывается alert() с содержимым поля text 

let message = {
    text: '',
    getMessage: function(string) {
        message.text = string;
    },
    showMessage: function() {
        alert(message.text);
    }
}
message.getMessage('asdasdasd');
message.showMessage();