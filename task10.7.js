// Создать объект selfGeneratedUser с методами: 
// 1) getInfo(), при вызове которого мы через prompt() поочередно получим данные об имени (name), 
//    емейле (email) и телефоне (phone) пользователя и запишем их в соответствующие свойства объекта. 
// 2) introduce(), при вызове которого мы поочередно выводим c помощью alert name, email и phone. 
//    Если поля нет - не выводим его, переходим к другому полю.

let selfGeneratedUser = {
    getInfo: function() {
        this.name = prompt('input your name');
        this.email = prompt('input your email');
        this.phone = prompt('input your phone');
    },
    introduce: function() {
        for (let key in this) {
            console.log(key);
            if (key == 'getInfo' || key == 'introduce' || this[key] === null || this[key] === '') {} else {
                alert(key + '=' + this[key]);
            }
        }
    }
}
let result = selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();